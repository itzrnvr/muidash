import Papa from 'papaparse';
import { leadsActions } from '../../../../state/features/leadSlice';

export default function handleCsvUpload(file){
// Stream big file in worker thread
    const data = []
    let count = 0
    Papa.parse(file, {
        worker: true,
        header: true,
        step: function(results) {
            data.push({id: count,...results.data})
            count = count+1
        },
        complete: function(finalData) {
            console.log("All done!");
            console.log(data)
            const channel = new BroadcastChannel('sw-messages');
            channel.postMessage({data: data});
        }
    });
}

