export function DataDisplay() {
    const [agencyData, setAgencyData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`${API_BASE_URL}/agencies`);
            const data = await response.json();
            setAgencyData(data);
        }
        fetchData();
    }, []);

    return (
        <div>
            <h1>View Agency Data</h1>
            {agencyData.length > 0 ? (
                <ul>
                    {agencyData.map((item, index) => (
                        <li key={index}>
                            <p><strong>Date Collected:</strong> {item.dateCollected}</p>
                            <p><strong>Agency:</strong> {item.agency}</p>
                            <p><strong>Fired:</strong> {item.fired}</p>
                            <p><strong>[Re]Hired:</strong> {item.rehired}</p>
                            <p><strong>Total Personnel:</strong> {item.totalPersonnel}</p>
                            <p><strong>Sources:</strong> {item.sources}</p>
                            <p><strong>Summary Notes:</strong> {item.summary}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No data available.</p>
            )}
        </div>
    );
}
