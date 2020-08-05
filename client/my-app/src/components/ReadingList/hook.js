import { useState } from 'react';


const useSelectedReads = () => {
    const [reads, setReads] = useState([])

    return [reads, setReads]
};
export default useSelectedReads;
