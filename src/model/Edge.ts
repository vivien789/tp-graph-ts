import { LineString } from "geojson";
import { Vertex } from "./Vertex";
import length from "@turf/length";
import { lineString } from "@turf/turf";

/**
 * An edge with its source and target
 */
export class Edge {
    id: string;
    private _source: Vertex;
    private _target: Vertex;
    
    constructor(_source: Vertex, _target: Vertex) {
        this._source = _source;
        this._target = _target;
    }

    getLength(): number {
        return length(lineString(this.getGeometry().coordinates));
    }

    getGeometry(): LineString {
        return {
            type: "LineString",
            coordinates: [
                this._source.coordinate,
                this._target.coordinate
            ]
        }
    }

    getSource(): Vertex {
        return this._source
    }

    getTarget(): Vertex {
        return this._target
    }

}
