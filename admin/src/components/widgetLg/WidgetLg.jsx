import './widgetLg.css'

function WidgetLg() {
    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
      };
    return (
        <div className="widgetLg">
            <div className="widgetLg">
                <h3 className="widgetLgTitle">Last transaction</h3>
                <table className="widgetLgTable">
                    <tr className="widgetLgTr">
                        <th className="widgetLgTh">Customer</th>
                        <th className="widgetLgTh">Date</th>
                        <th className="widgetLgTh">Amount</th>
                        <th className="widgetLgTh">Status</th>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="https://images.pexels.com/photos/1319911/pexels-photo-1319911.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                            alt="" className='widgetLgImg'/>
                            <span className="widgetLgName">Monderkaiser</span>
                        </td>
                        <td className="widgetLgDate">17 Jun 2021</td>
                        <td className="widgetLgAmount">$122.00</td>
                        <td className="widgetLgStatus">
                            <Button type="Approved" />
                        </td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                            alt="" className='widgetLgImg'/>
                            <span className="widgetLgName">Wukong</span>
                        </td>
                        <td className="widgetLgDate">17 Jun 2021</td>
                        <td className="widgetLgAmount">$186.00</td>
                        <td className="widgetLgStatus">
                            <Button type="Approved" />
                        </td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="https://images.pexels.com/photos/1372134/pexels-photo-1372134.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                            alt="" className='widgetLgImg'/>
                            <span className="widgetLgName">Jayce</span>
                        </td>
                        <td className="widgetLgDate">24 Sep 2021</td>
                        <td className="widgetLgAmount">$154.00</td>
                        <td className="widgetLgStatus">
                            <Button type="Declined" />
                        </td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                            alt="" className='widgetLgImg'/>
                            <span className="widgetLgName">Vladimir</span>
                        </td>
                        <td className="widgetLgDate">7 Jan 2021</td>
                        <td className="widgetLgAmount">$712.00</td>
                        <td className="widgetLgStatus">
                            <Button type="Waiting" />
                        </td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                            alt="" className='widgetLgImg'/>
                            <span className="widgetLgName">Jinx</span>
                        </td>
                        <td className="widgetLgDate">1 Apr 2021</td>
                        <td className="widgetLgAmount">$143.00</td>
                        <td className="widgetLgStatus">
                            <Button type="Declined" />
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default WidgetLg
