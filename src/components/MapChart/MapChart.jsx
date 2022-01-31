import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantize } from "d3-scale";
import { csv } from "d3-fetch";
import { geoMercator } from "d3-geo";

const brTopoJson = "sao_paulo.json";

const MapChart = () => {
  const [data, setData] = useState([]);

  var width = 960,
    height = 600;

  var projection = geoMercator()
    .scale(700)
    .center([-47, -15])
    .translate([width / 2, height / 2]);

  return (
    <>
      <h2 className="my-4 font-bold uppercase text-2xl text-center font-bold leading-7 text-gray-800 sm:text-3xl sm:truncate">
        Pacientes por estados
      </h2>
      <ComposableMap projection={projection}>
        <Geographies geography={brTopoJson}>
          {({ geographies }) => (
            <>
              {geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  stroke="#FFF"
                  geography={geo}
                  style={{
                    default: {
                      fill: "#57C447",
                      outline: "none",
                    },
                    hover: {
                      fill: "#367C2B",
                      outline: "none",
                    },
                    pressed: {
                      fill: "#367C2B",
                      outline: "none",
                    },
                  }}
                >
                  <text fontSize={14}>{geo.id}</text>
                </Geography>
              ))}
            </>
          )}
        </Geographies>
      </ComposableMap>
    </>
  );
};

export default MapChart;
