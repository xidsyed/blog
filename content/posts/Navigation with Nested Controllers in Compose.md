---
title: "Untitled"
date: 2024-01-27
tags: [Untagged]
aliases:
summary: ""
image:
  src: ""
  alt: ""
---

# ViewModel and Events
`NavigationEvent.kt`
```kotlin
abstract class NavigationEvent {
    abstract val screen: Screen
    abstract val arguments: List<String>
    abstract val popBackStack: Boolean
    val navGraph: NAVGRAPH by lazy {
        when (screen) {
            Screen.Home, Screen.Details -> NAVGRAPH.MAIN
            Screen.PopularMovieList, Screen.UpcomingMovieList -> NAVGRAPH.BOTTOMBAR
        }
    }
    fun navigate(navController: NavController) {
        val route = screen.route +
                if (arguments.isNotEmpty()) "/" + arguments.joinToString("/") else ""
        if (popBackStack) navController.popBackStack()
        navController.navigate(route)
    }
}

enum class NAVGRAPH {
    MAIN, BOTTOMBAR
}
```

`MovieListUiEvent.kt`
```kotlin
sealed interface MovieListUiEvent {
    data class Paginate(val category: MovieListCategory) : MovieListUiEvent
    data class Navigate(
        override val screen: Screen,
        override val arguments: List<String> = emptyList(),
        override val popBackStack: Boolean = false
    ) : MovieListUiEvent, NavigationEvent()
}
```

`ViewModelEvent.kt`
```kotlin
data class ViewModelNavigateMainEvent(  
    override val screen: Screen,  
    override val arguments: List<String>,  
    override val popBackStack: Boolean  
) : NavigationEvent()  
  
data class ViewModelNavigateBottomBarEvent(  
    override val screen: Screen,  
    override val arguments: List<String> = emptyList(),  
    override val popBackStack: Boolean = false  
) : NavigationEvent()  
  
  
fun MovieListUiEvent.Navigate.toNavigateMainEvent(): ViewModelNavigateMainEvent {  
    return ViewModelNavigateMainEvent(  
        screen,  
        arguments,  
        popBackStack,  
    )  
}  
  
fun MovieListUiEvent.Navigate.toNavigateBottomBarEvent(): ViewModelNavigateBottomBarEvent {  
    return ViewModelNavigateBottomBarEvent(  
        screen,  
        arguments,  
        popBackStack,  
    )  
}
```


# Usage

## Ui Events Production
`BottomNavigationBar.kt`
```kotlin
@Composable
fun BottomNavigationBar(onEvent: (MovieListUiEvent.Navigate) -> Unit) {
    val items = listOf(
        BottomNavItem(Screen.PopularMovieList,  ...),
        BottomNavItem(Screen.UpcomingMovieList, ...),
    )

    var selectedIndex by rememberSaveable { mutableIntStateOf(0) }

    NavigationBar {
        Row(
            modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.SpaceEvenly
        ) {
            items.forEachIndexed { index, bottomNavItem ->
                Add(bottomNavItem, index, selectedIndex) {
                    selectedIndex = index    // TODO : Receive from VM
                    onEvent(
                        MovieListUiEvent.Navigate(
                            screen = bottomNavItem.screen,
                            popBackStack = true
                        )
                    )
                }
            }
        }
    }
}

data class BottomNavItem(  
    val screen: Screen, val title: String, val icon: ImageVector  
)
```

`MovieListItem.kt`
```kotlin
@Composable  
fun MovieListItem(movie: Movie, onEvent : (MovieListUiEvent.Navigate) -> Unit) { 
    Column(modifier = Modifier 
		.clickable {  
            onEvent(MovieListUiEvent.Navigate(screen = Screen.Details, arguments = listOf("${movie.id}")))  
        })
	{
		...
	} 
}
```

## Consumption
`ObserveAsEvents.kt`
```kotlin
@Composable
fun <T> Flow<T>.ObserveAsEvents(onEvent: suspend (T) -> Unit) {
    val lifecycleOwner = LocalLifecycleOwner.current
    LaunchedEffect(this) {
        lifecycleOwner.repeatOnLifecycle(Lifecycle.State.STARTED) {
            withContext(Dispatchers.Main.immediate) {
                collect { event: T -> onEvent(event) }
            }
        }
    }
}
```

`HomeScreen.kt`
```kotlin
fun HomeScreen(viewModel: MovieListViewModel) {  
    val state = viewModel.movieListState.collectAsStateWithLifecycle().value  
    val snackbarHostState = remember { SnackbarHostState() }  
  
    Scaffold(  
        snackbarHost = {...},  
        topBar = {...}, bottomBar = {  
            BottomNavigationBar(  
                onEvent = viewModel::onUiEvent  
            )  
        }) {  
        Box(  
            modifier = Modifier  
                .fillMaxSize()  
                .padding(it)  
        ) {  
            val bottomNavController = rememberNavController()  
  
            viewModel.bottomNavEventFlow.ObserveAsEvents{ event ->  
                event.navigate(bottomNavController)  
            }
		}
	}
}
```

`MainActivity.kt`
```kotlin
@AndroidEntryPoint
class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            Theme {
                Surface(
                    modifier = Modifier.fillMaxSize(), color = MaterialTheme.colorScheme.background
                ) {
                    val navController = rememberNavController()
                    val viewModel = hiltViewModel<MovieListViewModel>()

                    viewModel.mainNavEventFlow.ObserveAsEvents { event ->
                        event.navigate(navController)
                    }

                    NavHost(navController, startDestination = Screen.Home.route) {
                        composable(Screen.Home.route) {
                            HomeScreen(viewModel)
                        }
                        composable(
                            route = Screen.Details.route + "/{movieId}",
                            arguments = listOf(
                                navArgument("movieId") { type = NavType.IntType }
                            )) {
                            DetailsScreen()
                        }
                    }
                }
            }
        }
    }

```