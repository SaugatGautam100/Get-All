import NavigationBar from "./NavigationBar";

export default function SignUp() {
    return(
        <>
        <NavigationBar />
        <div class="page-container">
        <div class="signup-card">
            <h2 class="signup-heading">Create an Account</h2>
            <p class="signup-subtext">Sign up to get started</p>

            <form class="signup-form">
                <div>
                    <label for="full-name" class="form-label">Full Name</label>
                    <input
                        type="text"
                        id="full-name"
                        name="full-name"
                        autocomplete="name"
                        required
                        class="form-input"
                        placeholder="John Doe"
                    />
                </div>

                <div>
                    <label for="email" class="form-label">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        autocomplete="email"
                        required
                        class="form-input"
                        placeholder="you@example.com"
                    />
                </div>

                <div>
                    <label for="password" class="form-label">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        autocomplete="new-password"
                        required
                        class="form-input"
                        placeholder="••••••••"
                    />
                </div>

                <div>
                    <label for="confirm-password" class="form-label">Confirm Password</label>
                    <input
                        type="password"
                        id="confirm-password"
                        name="confirm-password"
                        autocomplete="new-password"
                        required
                        class="form-input"
                        placeholder="••••••••"
                    />
                </div>

                <div>
                    <button
                        type="submit"
                        class="sign-up-button"
                    >
                        Sign up
                    </button>
                </div>
            </form>

            <div class="login-section">
                <p class="login-text">
                    Already have an account?
                    <a href="#" class="login-link">Log in</a>
                </p>
            </div>
        </div>
    </div>
        </>
    );
}