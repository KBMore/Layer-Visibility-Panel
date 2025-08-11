import { useEffect, useState } from "react";
import {layersData} from './LayerData';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

 interface LayerData {
    id: number;
    name: string;
    visible:boolean;
}

function LayerPanel(){
const [list, setList] = useState<LayerData[]>([]);

useEffect(()=>{
const fetchedData : LayerData[]= layersData;
console.log(fetchedData);
setList(fetchedData)
},
[]
)

return (
    <> <h2>Layers</h2>
    {list.map((item =>
        <ul className="layered-list">
            <li key={item.id} value={item.name} 
            onClick={()=>{
                setList(prev=>
                    prev.map(layer=>layer.id === item.id ? {...layer, visible: !layer.visible}: layer)
                );
            }} style={
                {cursor:"pointer"}
            }>{item.name} {"     "} {item.visible ? <VisibilityIcon/> : <VisibilityOffIcon/> }</li>
        </ul>
    ))}
    </>
)


}

export default LayerPanel;