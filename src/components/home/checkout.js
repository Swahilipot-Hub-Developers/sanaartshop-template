const checkout = () => {
  return (
    <div className="mx-4 my-4">
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
