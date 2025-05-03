export function ResultsTable() {
  return (
    <div>
      <table className="w-full">
        <thead className="border-b-secondary border-b">
          <tr className="py-3">
            <th className="py-5 text-left text-xs">Flag</th>
            <th className="py-5 text-left text-xs">Name</th>
            <th className="py-5 text-left text-xs">Population</th>
            <th className="py-5 text-left text-xs">Area (km²)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>cell1_1</td>
            <td>cell2_1</td>
            <td>cell3_1</td>
            <td>cell4_1</td>
          </tr>
          <tr>
            <td>cell1_2</td>
            <td>cell2_2</td>
            <td>cell3_2</td>
            <td>cell4_2</td>
          </tr>
          <tr>
            <td>cell1_3</td>
            <td>cell2_3</td>
            <td>cell3_3</td>
            <td>cell4_3</td>
          </tr>
          <tr>
            <td>cell1_4</td>
            <td>cell2_4</td>
            <td>cell3_4</td>
            <td>cell4_4</td>
          </tr>
          <tr>
            <td>cell1_5</td>
            <td>cell2_5</td>
            <td>cell3_5</td>
            <td>cell4_5</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
