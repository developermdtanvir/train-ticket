import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useCallback, useState } from "react";
import location from '../../assets/images/location.png';

const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};



function Search() {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "YOUR_API_KEY"
    })

    const [map, setMap] = useState(null)

    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map);

    }, []);

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    return (
        <div className=" flex container mx-auto lg:flex-row">
            <div className=" w-1/4">
                <form action="" className=" w-[200px] mx-auto p-4 space-y-4">
                    <div>
                        <label className=" block" htmlFor="from">Pick From</label>
                        <input type="text" name="from" id="from" />
                    </div>
                    <div>
                        <label className=" block" htmlFor="from">Pick To</label>
                        <input type="text" name="from" id="from" />
                    </div>
                    <div className=" flex justify-center">
                        <input className=" bg-orange-400 cursor-pointer" type="submit" value="search" />
                    </div>
                </form>
            </div>
            <div className=" w-3/4 flex">
                <div>
                    {isLoaded ? (
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={10}
                            onLoad={onLoad}
                            onUnmount={onUnmount}
                        >
                            { /* Child components, such as markers, info windows, etc. */}
                            <></>
                        </GoogleMap>
                    ) : <></>}
                </div>
                <div>
                    <img src={location} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Search;