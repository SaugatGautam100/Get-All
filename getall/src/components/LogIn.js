import NavigationBar from "./NavigationBar";

export default function LogIn() {
    return(
        <>
        <NavigationBar />
         <div class="page-container">
        <div class="login-card">
            <h2 class="login-heading">Welcome Back!</h2>
            <p class="login-subtext">Log in to your account</p>

            <form class="login-form">
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
                        autocomplete="current-password"
                        required
                        class="form-input"
                        placeholder="••••••••"
                    />
                </div>

                <div class="form-options">
                    <div class="checkbox-container">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            class="checkbox-input"
                        />
                        <label for="remember-me" class="checkbox-label">Remember me</label>
                    </div>

                    <div>
                        <a href="#" class="forgot-password-link">Forgot your password?</a>
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        class="sign-in-button"
                    >
                        Sign in
                    </button>
                </div>
            </form>

            <div class="signup-section">
                <p class="signup-text">
                    Don't have an account?
                    <a href="#" class="signup-link">Sign up</a>
                </p>
            </div>
        </div>
    </div>
        </>
    );
}