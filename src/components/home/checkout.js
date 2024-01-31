const checkout = () => {
  return (
    <div className="mx-4 my-4 py-3">
      <form class="needs-validation mb-5" novalidate>
        <div class="row">
          <div class="col-md-4 mb-3">
            <label for="validationTooltip01" class="form-label">
              First name
            </label>
            <input
              class="form-control"
              type="text"
              id="validationTooltip01"
              placeholder="First name"
              value="John"
              required
            />
            <div class="valid-tooltip">Looks good!</div>
          </div>
          <div class="col-md-4 mb-3">
            <label for="validationTooltip02" class="form-label">
              Last name
            </label>
            <input
              class="form-control"
              type="text"
              id="validationTooltip02"
              placeholder="Last name"
              value="Doe"
              required
            />
            <div class="valid-tooltip">Looks good!</div>
          </div>
          <div class="col-md-4 mb-3">
            <label for="validationTooltipUsername" class="form-label">
              Username
            </label>
            <input
              class="form-control"
              type="text"
              id="validationTooltipUsername"
              placeholder="Username"
              required
            />
            <div class="invalid-tooltip">Please choose a username.</div>
            <div class="valid-tooltip">Looks good!</div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="validationTooltip03" class="form-label">
              City
            </label>
            <select class="form-select" id="validationTooltip03" required>
              <option value="">Choose city...</option>
              <option value="Dallas">Dallas</option>
              <option value="Houston">Houston</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Miami">Miami</option>
              <option value="New York">New York</option>
            </select>
            <div class="invalid-tooltip">Please provide a valid city.</div>
            <div class="valid-tooltip">Looks good!</div>
          </div>
          <div class="col-md-3 mb-3">
            <label for="validationTooltip04" class="form-label">
              State
            </label>
            <select class="form-select" id="validationTooltip04" required>
              <option value="">Choose state...</option>
              <option value="Arizona">Arizona</option>
              <option value="Colorado">Colorado</option>
              <option value="Florida">Florida</option>
              <option value="Indiana">Indiana</option>
              <option value="Kentucky">Kentucky</option>
              <option value="Texas">Texas</option>
            </select>
            <div class="invalid-tooltip">Please provide a valid state.</div>
            <div class="valid-tooltip">Looks good!</div>
          </div>
          <div class="col-md-3 mb-3">
            <label for="validationTooltip05" class="form-label">
              Zip
            </label>
            <input
              class="form-control"
              type="text"
              id="validationTooltip05"
              placeholder="Zip"
              required
            />
            <div class="invalid-tooltip">Please provide a valid zip.</div>
            <div class="valid-tooltip">Looks good!</div>
          </div>
        </div>
        <div class="mb-3">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="invalidCheck01"
              required
            />
            <label class="form-check-label" for="invalidCheck01">
              Agree to terms and conditions
            </label>
            <div class="invalid-tooltip">You must agree before submitting.</div>
          </div>
        </div>
        {/*<button class="btn btn-primary" type="submit">
          Submit Form
        </button>
  */}
      </form>
      <h1>Enter your card details</h1>
      <div class="credit-card-wrapper"></div>
      <form class="credit-card-form row g-3">
        <div class="col-sm-6">
          <input
            type="text"
            class="form-control"
            name="number"
            placeholder="Card Number"
            required
          />
        </div>
        <div class="col-sm-6">
          <input
            type="text"
            class="form-control"
            name="name"
            placeholder="Full Name"
            required
          />
        </div>
        <div class="col-sm-3">
          <input
            type="text"
            class="form-control"
            name="expiry"
            placeholder="MM/YY"
            required
          />
        </div>
        <div class="col-sm-3">
          <input
            type="text"
            class="form-control"
            name="cvc"
            placeholder="CVC"
            required
          />
        </div>
        <div class="col-sm-6">
          <button type="submit" class="btn btn-primary d-block w-100">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default checkout;
