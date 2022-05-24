import React from 'react'
import Header from './Header';


function Login() {
	return (
		<div className="main">
			<div className="main-w3l">
				<h1 className="logo-w3">Shopping <span>Sign in</span> Form</h1>
				<div className="w3layouts-left">
					<h3>Connect With Your Social Account</h3>
					<p>Enter into your website to shop more with best offers upto 50% off this week</p>
					<div className="icon">
						<span className="fa fa-thumbs-o-up" aria-hidden="true" />
					</div>
					<ul>
						<li><a href="#" className="f"><i className="fa fa-facebook" aria-hidden="true" />Sign in with Facebook</a></li>
						<li><a href="#" className="t"><i className="fa fa-twitter" aria-hidden="true" />Sign in with Twitter</a></li>
						<li><a href="#" className="g"><i className="fa fa-google-plus" aria-hidden="true" />Sign in with Google+</a></li>
					</ul>
				</div>
				<div className="w3layouts-main">
					<h2><span>Sign In To Your Account</span></h2>
					<form action="#" method="post">
						<input placeholder="Email Address" name="Email" type="email" required />
						<input placeholder="Password" name="Password" type="password" required />
						<input type="submit" defaultValue="Get Started" name="login" value="Login"/>
					</form>
					<h6><a href="#">Forgot Your Password?</a> <span> Or </span><a href="/register"> Register</a></h6>
				</div>
				<div className="clear" />
			</div>
			<Header />
		</div>
	);
}
export default Login;
