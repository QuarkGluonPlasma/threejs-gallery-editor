import { useEffect, useState } from "react";
import { init3D } from "./init-3d";
import { init2D } from "./init-2d";
import { Button } from "antd";

function Main() {

    useEffect(() => {
        const dom = document.getElementById('threejs-3d-container')!;
        const { scene } = init3D(dom);
          
        return () => {
          dom.innerHTML = '';
        }
    }, []);

    useEffect(() => {
        const dom = document.getElementById('threejs-2d-container')!;
        const { scene } = init2D(dom);
          
        return () => {
          dom.innerHTML = '';
        }
    }, []);

    const [curMode, setCurMode] = useState('2d');

    return <div className="Main">
        <div id="threejs-3d-container" style={{display: curMode ==='3d' ? 'block': 'none'}}></div>
        <div id="threejs-2d-container" style={{display: curMode ==='2d' ? 'block': 'none'}}></div>
         <div className="mode-change-btns">
            <Button
                type={curMode === '2d' ? "primary" : 'default'} 
                onClick={() => setCurMode('2d')}
                >2D</Button>
            <Button 
                type={curMode === '3d' ? "primary" : 'default'}
                onClick={() => setCurMode('3d')}
                >3D</Button>
         </div>
    </div>
}

export default Main;