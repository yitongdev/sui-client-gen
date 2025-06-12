import * as reified from "../../../../../_framework/reified.js";
import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeStr,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  fieldToJSON,
  phantom,
} from "../../../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../../../_framework/util.js";
import { Vector } from "../../../../../_framework/vector.js";
import { PKG_V35 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isProofPoints(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V35}::groth16::ProofPoints`;
}

export interface ProofPointsFields {
  bytes: ToField<Vector<"u8">>;
}

export type ProofPointsReified = Reified<ProofPoints, ProofPointsFields>;

/**
 * Move struct: `ProofPoints`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::groth16`
 */
export class ProofPoints implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V35}::groth16::ProofPoints`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = ProofPoints.$typeName;
  readonly $fullTypeName: `${typeof PKG_V35}::groth16::ProofPoints`;
  readonly $typeArgs: [];
  readonly $isPhantom = ProofPoints.$isPhantom;

  readonly bytes: ToField<Vector<"u8">>;

  private constructor(typeArgs: [], fields: ProofPointsFields) {
    this.$fullTypeName = composeSuiType(
      ProofPoints.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V35}::groth16::ProofPoints`;
    this.$typeArgs = typeArgs;

    this.bytes = fields.bytes;
  }

  static reified(): ProofPointsReified {
    return {
      typeName: ProofPoints.$typeName,
      fullTypeName: composeSuiType(
        ProofPoints.$typeName,
        ...[],
      ) as `${typeof PKG_V35}::groth16::ProofPoints`,
      typeArgs: [] as [],
      isPhantom: ProofPoints.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => ProofPoints.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => ProofPoints.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => ProofPoints.fromBcs(data),
      bcs: ProofPoints.bcs,
      fromJSONField: (field: any) => ProofPoints.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => ProofPoints.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => ProofPoints.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => ProofPoints.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => ProofPoints.fetch(client, id),
      new: (fields: ProofPointsFields) => {
        return new ProofPoints([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return ProofPoints.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<ProofPoints>> {
    return phantom(ProofPoints.reified());
  }
  static get p() {
    return ProofPoints.phantom();
  }

  static get bcs() {
    return bcs.struct("ProofPoints", {
      bytes: bcs.vector(bcs.u8()),
    });
  }

  static fromFields(fields: Record<string, any>): ProofPoints {
    return ProofPoints.reified().new({
      bytes: decodeFromFields(reified.vector("u8"), fields.bytes),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): ProofPoints {
    if (!isProofPoints(item.type)) {
      throw new Error("not a ProofPoints type");
    }

    return ProofPoints.reified().new({
      bytes: decodeFromFieldsWithTypes(reified.vector("u8"), item.fields.bytes),
    });
  }

  static fromBcs(data: Uint8Array): ProofPoints {
    return ProofPoints.fromFields(ProofPoints.bcs.parse(data));
  }

  toJSONField() {
    return {
      bytes: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.bytes),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): ProofPoints {
    return ProofPoints.reified().new({
      bytes: decodeFromJSONField(reified.vector("u8"), field.bytes),
    });
  }

  static fromJSON(json: Record<string, any>): ProofPoints {
    if (json.$typeName !== ProofPoints.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return ProofPoints.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): ProofPoints {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isProofPoints(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a ProofPoints object`);
    }
    return ProofPoints.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): ProofPoints {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isProofPoints(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a ProofPoints object`);
      }

      return ProofPoints.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return ProofPoints.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<ProofPoints> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching ProofPoints object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isProofPoints(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a ProofPoints object`);
    }

    return ProofPoints.fromSuiObjectData(res.data);
  }
}
