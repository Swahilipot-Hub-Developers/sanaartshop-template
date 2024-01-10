import React from 'react'

const Marketting = () => {
  return (
    <section
  className="bg-accent bg-size-cover bg-position-center pt-5 pb-4 pb-lg-5"
  style={{ backgroundImage: "url(img/marketplace/features/features-bg.jpg)" }}
>
  <div className="container pt-lg-3">
    <h2 className="h3 mb-3 pb-4 text-light text-center">
      Why our marketplace?
    </h2>
    <div className="row pt-lg-2 text-center">
      <div className="col-lg-3 col-sm-6 mb-grid-gutter">
        <div className="d-inline-flex align-items-center text-start">
          <img
            src="img/marketplace/features/quality.png"
            width={52}
            alt="Quality Guarantee"
          />
          <div className="ps-3">
            <h6 className="text-light fs-base mb-1">Quality Guarantee</h6>
            <p className="text-light fs-ms opacity-70 mb-0">
              Quality checked by our team
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6 mb-grid-gutter">
        <div className="d-inline-flex align-items-center text-start">
          <img
            src="img/marketplace/features/support.png"
            width={52}
            alt="Customer Support"
          />
          <div className="ps-3">
            <h6 className="text-light fs-base mb-1">Customer Support</h6>
            <p className="text-light fs-ms opacity-70 mb-0">
              Friendly 24/7 customer support
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6 mb-grid-gutter">
        <div className="d-inline-flex align-items-center text-start">
          <img
            src="img/marketplace/features/updates.png"
            width={52}
            alt="Free Updates"
          />
          <div className="ps-3">
            <h6 className="text-light fs-base mb-1">Lifetime Free Updates</h6>
            <p className="text-light fs-ms opacity-70 mb-0">
              Never pay for an update
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6 mb-grid-gutter">
        <div className="d-inline-flex align-items-center text-start">
          <img
            src="img/marketplace/features/secure.png"
            width={52}
            alt="Secure Payments"
          />
          <div className="ps-3">
            <h6 className="text-light fs-base mb-1">Secure Payments</h6>
            <p className="text-light fs-ms opacity-70 mb-0">
              We posess SSL / Secure сertificate
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Marketting