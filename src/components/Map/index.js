import React, { Component, Fragment } from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps";
import { Tooltip } from "react-tooltip";
import PropTypes from "prop-types";
import { STYLES_MAP, ZOOM } from "./constants";
import { formatNumberDecimal } from "./utils";

class Map extends Component {
  state = { zoom: 2 };

  handleZoomChange = (zoom) => this.setState({ zoom });

  handleZoomIn = () => this.handleZoomChange(this.state.zoom + ZOOM);

  handleZoomOut = () => this.handleZoomChange(this.state.zoom - ZOOM);

  handleResetZoom = () => this.setState({ zoom: 2 });

  render() {
    const { width, height, center, scale, currency, map } = this.props.data;
    const { onHover } = this.props;

    return (
      <Fragment>
        <hr />
        <ComposableMap
          projectionConfig={{ rotate: [50, 0, 0], scale }}
          width={width}
          height={height}
        >
          <ZoomableGroup
            zoom={this.state.zoom}
            center={center}
            // translateExtent={[
            //   [-100, -100],
            //   [500, 500],
            // ]}
          >
            <Geographies geography={map}>
              {({ geographies, projection }) =>
                geographies.map((geography) => {
                  const geographyValue = `${currency} ${formatNumberDecimal(
                    geography.properties.VALUE
                  )}`;
                  return (
                    <Geography
                      key={geography.properties.NAME}
                      data-tooltip-content={`${geography.properties.NAME} ${geographyValue}`}
                      data-tooltip-id={geography.properties.NAME}
                      geography={geography}
                      projection={projection}
                      precision={0.5}
                      style={{
                        default: STYLES_MAP.default,
                        hover: STYLES_MAP.hover,
                        pressed: STYLES_MAP.pressed,
                      }}
                      onMouseEnter={() =>
                        onHover({
                          name: geography.properties.NAME,
                          habitantes: geography.properties.HABITANTES,
                          totales: geography.properties.TOTALES,
                          variaciones: geography.properties.VARIACIONES,
                          porcentuales: geography.properties.PORCENTUALES,
                        })
                      }
                      onMouseLeave={() => onHover(null)}
                    />
                  );
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
        <Tooltip />
      </Fragment>
    );
  }
}

Map.defaultProps = {
  width: 600,
  height: 500,
  center: [0, 0],
  scale: 500,
  currency: "",
};

Map.propTypes = {
  data: PropTypes.object.isRequired,
  onHover: PropTypes.func.isRequired,
};

export default Map;
