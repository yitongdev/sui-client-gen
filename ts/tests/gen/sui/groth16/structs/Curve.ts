import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeStr,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  phantom,
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../_framework/util.js";
import { PKG_V31 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isCurve(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V31}::groth16::Curve`;
}

export interface CurveFields {
  id: ToField<"u8">;
}

export type CurveReified = Reified<Curve, CurveFields>;

/**
 * Move struct: `Curve`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::groth16`
 */
export class Curve implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::groth16::Curve`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = Curve.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::groth16::Curve`;
  readonly $typeArgs: [];
  readonly $isPhantom = Curve.$isPhantom;

  readonly id: ToField<"u8">;

  private constructor(typeArgs: [], fields: CurveFields) {
    this.$fullTypeName = composeSuiType(
      Curve.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::groth16::Curve`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
  }

  static reified(): CurveReified {
    return {
      typeName: Curve.$typeName,
      fullTypeName: composeSuiType(
        Curve.$typeName,
        ...[],
      ) as `${typeof PKG_V31}::groth16::Curve`,
      typeArgs: [] as [],
      isPhantom: Curve.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => Curve.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        Curve.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => Curve.fromBcs(data),
      bcs: Curve.bcs,
      fromJSONField: (field: any) => Curve.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => Curve.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        Curve.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        Curve.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => Curve.fetch(client, id),
      new: (fields: CurveFields) => {
        return new Curve([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Curve.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<Curve>> {
    return phantom(Curve.reified());
  }
  static get p() {
    return Curve.phantom();
  }

  static get bcs() {
    return bcs.struct("Curve", {
      id: bcs.u8(),
    });
  }

  static fromFields(fields: Record<string, any>): Curve {
    return Curve.reified().new({ id: decodeFromFields("u8", fields.id) });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): Curve {
    if (!isCurve(item.type)) {
      throw new Error("not a Curve type");
    }

    return Curve.reified().new({
      id: decodeFromFieldsWithTypes("u8", item.fields.id),
    });
  }

  static fromBcs(data: Uint8Array): Curve {
    return Curve.fromFields(Curve.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): Curve {
    return Curve.reified().new({ id: decodeFromJSONField("u8", field.id) });
  }

  static fromJSON(json: Record<string, any>): Curve {
    if (json.$typeName !== Curve.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return Curve.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): Curve {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isCurve(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a Curve object`,
      );
    }
    return Curve.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): Curve {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isCurve(data.bcs.type)) {
        throw new Error(`object at is not a Curve object`);
      }

      return Curve.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Curve.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<Curve> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching Curve object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isCurve(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a Curve object`);
    }

    return Curve.fromSuiObjectData(res.data);
  }
}
