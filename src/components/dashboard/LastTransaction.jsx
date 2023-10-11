import React from 'react'

const LastTransaction = () => {
    return (
        <>
            <div className='last-transaction pb-5'>
                <h4>Last Transaction</h4>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Package</th>
                                <th>Start End</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>₹152.88.00</td>
                                <td>23.05.2023</td>
                                <td>10</td>
                                <td>20.06.2023</td>
                            </tr>
                            <tr>
                                <td>₹152.88.00</td>
                                <td>23.05.2023</td>
                                <td>10</td>
                                <td>20.06.2023</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default LastTransaction