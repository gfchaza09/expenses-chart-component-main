import React from 'react';

import './Main.styles.css';

export const Main = ({data, higher}) => {

    const handleMouseOut = e => {
        e.target.innerHTML = "";
    }

    const handleMouseOver = e => {
        let newHTMLCode = `
                    <div class="graphic__number">
                        <span>$${data[e.target.id-1].amount}</span>
                    </div>`;
        e.target.innerHTML = newHTMLCode;
    }

  return (
    <main>
        <header>
            <div className="header__balance">
                <h1>My balance</h1>
                <p>$921.48</p>
            </div>
            <div>
                <div className="circle"></div>
                <div className="ring"></div>
            </div>
        </header>
    
        <section>
            <div>
                <h2>Spending - Last 7 days</h2>
                <div className="container__graphics">
                    {
                        data.map(day => {
                            return (<div className={`graphics ${higher === day ? 'higher' : ""}`} key={day.id} id={day.id} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{height: `${day.amount * 3}px`}}></div>)
                        })
                    }
                    {
                        data.map(day => {
                            return (<div className='days' key={day.day}>{day.day}</div>)
                        })
                    }
                </div>
                <div className="total">
                    <div>
                        <span>Total this month</span>
                        <p className="total__number">$478.33</p>
                    </div>
                    <div className="total__last-month">
                        <p>+2.4%</p>
                        <span>from last month</span>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}
