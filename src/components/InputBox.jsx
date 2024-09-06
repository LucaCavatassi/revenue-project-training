export default function InputBox() {
    return (
        <div id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="Initial Investiment">Initial Investiments</label>
                    <input type="number" id="Initial Investiment" />
                </p>
                <p>
                    <label htmlFor="Annual Investiment">Annual Investiments</label>
                    <input type="number" id="Annual Investiments" />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="Expected Return">Expected Return</label>
                    <input type="number" id="Expected Return" />
                </p>
                <p>
                    <label htmlFor="Duration">Duration</label>
                    <input type="number" id="Duration" />
                </p>
            </div>
        </div>
    )
}