const Login = () => {
  return (
    <div className="container col-12 col-md-6 mx-auto py-5 mt-4 mb-2 mb-md-4">
      <form
        className="tab-pane fade show active"
        autoComplete="off"
        noValidate=""
        id="signin-tab"
      >
        <div className="mb-3">
          <label className="form-label" htmlFor="si-email">
            Email address
          </label>
          <input
            className="form-control"
            type="email"
            id="si-email"
            placeholder="johndoe@example.com"
            required=""
          />
          <div className="invalid-feedback">
            Please provide a valid email address.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="si-password">
            Password
          </label>
          <div className="password-toggle">
            <input
              className="form-control"
              type="password"
              id="si-password"
              required=""
            />
            <label
              className="password-toggle-btn"
              aria-label="Show/hide password"
            >
              <input className="password-toggle-check" type="checkbox" />
              <span className="password-toggle-indicator" />
            </label>
          </div>
        </div>
        <div className="mb-3 d-flex flex-wrap justify-content-between">
          <div className="form-check mb-2">
            <input
              className="form-check-input"
              type="checkbox"
              id="si-remember"
            />
            <label className="form-check-label" htmlFor="si-remember">
              Remember me
            </label>
          </div>
          <a className="fs-sm" href="#">
            Forgot password?
          </a>
        </div>
        <button
          className="btn btn-primary btn-shadow d-block w-100"
          type="submit"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
