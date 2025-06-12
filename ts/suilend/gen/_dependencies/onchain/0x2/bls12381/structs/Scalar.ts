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
} from "../../../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../../../_framework/util.js";
import { PKG_V35 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isScalar(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V35}::bls12381::Scalar`;
}

export interface ScalarFields {
  dummyField: ToField<"bool">;
}

export type ScalarReified = Reified<Scalar, ScalarFields>;

/**
 * Move struct: `Scalar`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::bls12381`
 */
export class Scalar implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V35}::bls12381::Scalar`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = Scalar.$typeName;
  readonly $fullTypeName: `${typeof PKG_V35}::bls12381::Scalar`;
  readonly $typeArgs: [];
  readonly $isPhantom = Scalar.$isPhantom;

  readonly dummyField: ToField<"bool">;

  private constructor(typeArgs: [], fields: ScalarFields) {
    this.$fullTypeName = composeSuiType(
      Scalar.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V35}::bls12381::Scalar`;
    this.$typeArgs = typeArgs;

    this.dummyField = fields.dummyField;
  }

  static reified(): ScalarReified {
    return {
      typeName: Scalar.$typeName,
      fullTypeName: composeSuiType(
        Scalar.$typeName,
        ...[],
      ) as `${typeof PKG_V35}::bls12381::Scalar`,
      typeArgs: [] as [],
      isPhantom: Scalar.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => Scalar.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => Scalar.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => Scalar.fromBcs(data),
      bcs: Scalar.bcs,
      fromJSONField: (field: any) => Scalar.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => Scalar.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => Scalar.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => Scalar.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => Scalar.fetch(client, id),
      new: (fields: ScalarFields) => {
        return new Scalar([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Scalar.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<Scalar>> {
    return phantom(Scalar.reified());
  }
  static get p() {
    return Scalar.phantom();
  }

  static get bcs() {
    return bcs.struct("Scalar", {
      dummy_field: bcs.bool(),
    });
  }

  static fromFields(fields: Record<string, any>): Scalar {
    return Scalar.reified().new({ dummyField: decodeFromFields("bool", fields.dummy_field) });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): Scalar {
    if (!isScalar(item.type)) {
      throw new Error("not a Scalar type");
    }

    return Scalar.reified().new({
      dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
    });
  }

  static fromBcs(data: Uint8Array): Scalar {
    return Scalar.fromFields(Scalar.bcs.parse(data));
  }

  toJSONField() {
    return {
      dummyField: this.dummyField,
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): Scalar {
    return Scalar.reified().new({ dummyField: decodeFromJSONField("bool", field.dummyField) });
  }

  static fromJSON(json: Record<string, any>): Scalar {
    if (json.$typeName !== Scalar.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return Scalar.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): Scalar {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isScalar(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a Scalar object`);
    }
    return Scalar.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): Scalar {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isScalar(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a Scalar object`);
      }

      return Scalar.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Scalar.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<Scalar> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching Scalar object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isScalar(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a Scalar object`);
    }

    return Scalar.fromSuiObjectData(res.data);
  }
}
