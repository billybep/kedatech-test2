import React from 'react'
import './Pricing.css'
import tier1Ico from './basic_world.svg'
import tier2Ico from './basic_todolist_pen.svg'
import tier3Ico from './basic_case.svg'

function Pricing() {
  return (
    <>
      <section className="section-pricing" id="pricing">
        <div className="flex justify-center flex-wrap pt-32">
          <div className="pricing-box mx-12 my-3">
            <img className="pricing-box__icon py-6" src={tier1Ico} alt="world.svg" />
            <h3 className="text-2xl font-bold my-6 uppercase">Basic</h3>
            <div className="pricing-box__text text-sm flex">
              <div className="mr-2">&#8250;</div>
              <div>Mencatat barang masuk</div>
            </div>
            <div className="pricing-box__text text-sm flex">
              <div className="mr-2">&#8250;</div>
              <div>Mencatat barang keluar</div>
            </div>
            <div className="pricing-box__text text-sm flex">
              <div className="mr-2">&#8250;</div>
              <div>Mencatat Keuntungan</div>
            </div>
            <div className="text-3xl font-bold py-6 subscription">
              <h3>IDR 129.000
                <span className="text-sm text-zinc-800">/month</span>
              </h3>
            </div>
          </div>
          <div className="pricing-box mx-12 my-3">
            <img className="pricing-box__icon py-6" src={tier2Ico} alt="world.svg" />
            <h3 className="text-2xl font-bold my-6 uppercase">Business</h3>
            <div className="pricing-box__text text-sm">
              <div className="pricing-box__text text-sm flex">
                <div className="mr-2">&#8250;</div>
                <div>Mencatat barang masuk</div>
              </div>
              <div className="pricing-box__text text-sm flex">
                <div className="mr-2">&#8250;</div>
                <div>Mencatat barang keluar</div>
              </div>
              <div className="pricing-box__text text-sm flex">
                <div className="mr-2">&#8250;</div>
                <div>Mencatat Keuntungan</div>
              </div>
              <div className="pricing-box__text text-sm flex">
                <div className="mr-2">&#8250;</div>
                <div>Dapat menganalisa hasil penjualan dengan CHART</div>
              </div>
              <div className="pricing-box__text text-sm flex">
                <div className="mr-2">&#8250;</div>
                <div>Support 7x24 Jam</div>
              </div>
            </div>
            <div className="text-3xl font-bold py-6 subscription">
              <h3>IDR 156.400
                <span className="text-sm text-zinc-800">/month</span>
              </h3>
            </div>
          </div>
          <div className="pricing-box mx-12 my-3">
            <img className="pricing-box__icon py-6" src={tier3Ico} alt="world.svg" />
            <h3 className="text-2xl font-bold my-6 uppercase">Entrepreneur</h3>
            <div className="pricing-box__text text-sm flex">
              <div className="mr-2">&#8250;</div>
              <div>Mencatat barang masuk</div>
            </div>
            <div className="pricing-box__text text-sm flex">
              <div className="mr-2">&#8250;</div>
              <div>Mencatat barang keluar</div>
            </div>
            <div className="pricing-box__text text-sm flex">
              <div className="mr-2">&#8250;</div>
              <div>Mencatat Keuntungan</div>
            </div>
            <div className="pricing-box__text text-sm flex">
              <div className="mr-2">&#8250;</div>
              <div>Dapat menganalisa hasil penjualan dengan CHART</div>
            </div>
            <div className="pricing-box__text text-sm flex">
              <div className="mr-2">&#8250;</div>
              <div>Support 7x24 Jam</div>
            </div>

            <div className="pricing-box__text text-sm flex">
              <div className="mr-2">&#8250;</div>
              <div>Export data ke Excel</div>
            </div>
            <div className="pricing-box__text text-sm flex">
              <div className="mr-2">&#8250;</div>
              <div>AI Prediksi penghasilan</div>
            </div>
            <div className="text-3xl font-bold py-6 subscription">
              <h3>IDR 344.200
                <span className="text-sm text-zinc-800">/month</span>
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Pricing
