use leptos::*;
use leptos_meta::*;
use leptos_router::*;

#[component]
pub fn App(cx: Scope) -> impl IntoView {
    // Provides context that manages stylesheets, titles, meta tags, etc.
    provide_meta_context(cx);

    view! {
        cx,

        // injects a stylesheet into the document <head>
        // id=leptos means cargo-leptos will hot-reload this stylesheet
        <Stylesheet id="leptos" href="/pkg/leptos_start.css"/>

        <Title text="Damien Sedgwick | Fullstack Developer"/>
        // TODO: Meta description text below:
        // One day, I will have written, something really meaningful, and it will go here.

        <Router>
            <main>
                <Routes>
                    <Route path="" view=|cx| view! { cx, <HomePage/> }/>
                </Routes>
            </main>
        </Router>
    }
}

/// Renders the home page of your application.
#[component]
fn HomePage(cx: Scope) -> impl IntoView {
    // Creates a reactive value to update the button
    // let (count, set_count) = create_signal(cx, 0);
    // let on_click = move |_| set_count.update(|count| *count += 1);

    view! { cx,
        <header>
            <h1>"Damien Sedgwick"</h1>
            <p>"Fullstack Developer"</p>
            <ul>
                <li>
                    <a href="https://github.com/damiensedgwick" title="Social link to GitHub for Damien Sedgwick" target="_blank">"Github"</a>
                </li>
                <li>
                    <a href="https://linkedin.com/in/damiensedgwick/" title="Social link to LinkedIn for Damien Sedgwick" target="_blank">"LinkedIn"</a>
                </li>
            </ul>
        </header>
        // <button on:click=on_click>"Click Me: " {count}</button>
    }
}
