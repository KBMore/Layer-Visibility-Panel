import { useEffect, useState } from "react";
import { layersData } from './LayerData';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { IconButton } from "@mui/material";

interface LayerData {
    id: number;
    name: string;
    visible: boolean;
}

function LayerPanel() {
    const [list, setList] = useState<LayerData[]>([]);

    useEffect(() => {
        const fetchedData: LayerData[] = layersData;
        setList(fetchedData)
    },
        []
    );

    const showAll = () => {
        setList(prev => prev.map(layer => ({ ...layer, visible: true })))
    }

    const hideAll = () => {
        setList(prev => prev.map(layer => ({ ...layer, visible: false })))
    }

    return (
        <div className="main-wrapper" style={{backgroundColor:"aliceblue", margin:"auto", padding:"10px 0px 0px 10px"}}> <h2 id="layers-heading">Layers</h2>
            <div className="actions" style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <button onClick={showAll}>Show All</button>
                <button onClick={hideAll}>Hide All</button>
                <span>Total Layers: {list.length}</span>
            </div>
            <ul role="list" aria-labelledby="layers-heading" className="layered-list" style={{ listStyle: "none" }}>
                {list.map((item =>
                    <li key={item.id} style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "12px",
                        padding: "6px 0"
                    }}>
                        <span className="name" >{item.name}</span>
                        <IconButton
                            onClick={() => {
                                setList(prev =>
                                    prev.map(layer => layer.id === item.id ? { ...layer, visible: !layer.visible } : layer)
                                );
                            }} role="switch" aria-label={`Toggle Visibility for ${item.name}`}
                            style={
                                { cursor: "pointer" }
                            }> {item.visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </IconButton>
                    </li>

                ))}
            </ul>
        </div>
    )


}

export default LayerPanel;