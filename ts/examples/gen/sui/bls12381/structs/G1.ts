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
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../../_framework/util.js";
import { PKG_V31 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isG1(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V31}::bls12381::G1`;
}

export interface G1Fields {
  dummyField: ToField<"bool">;
}

export type G1Reified = Reified<G1, G1Fields>;

/**
 * Move struct: `G1`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::bls12381`
 */
export class G1 implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::bls12381::G1`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = G1.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::bls12381::G1`;
  readonly $typeArgs: [];
  readonly $isPhantom = G1.$isPhantom;

  readonly dummyField: ToField<"bool">;

  private constructor(typeArgs: [], fields: G1Fields) {
    this.$fullTypeName = composeSuiType(
      G1.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::bls12381::G1`;
    this.$typeArgs = typeArgs;

    this.dummyField = fields.dummyField;
  }

  static reified(): G1Reified {
    return {
      typeName: G1.$typeName,
      fullTypeName: composeSuiType(G1.$typeName, ...[]) as `${typeof PKG_V31}::bls12381::G1`,
      typeArgs: [] as [],
      isPhantom: G1.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => G1.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => G1.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => G1.fromBcs(data),
      bcs: G1.bcs,
      fromJSONField: (field: any) => G1.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => G1.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => G1.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => G1.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => G1.fetch(client, id),
      new: (fields: G1Fields) => {
        return new G1([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return G1.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<G1>> {
    return phantom(G1.reified());
  }
  static get p() {
    return G1.phantom();
  }

  static get bcs() {
    return bcs.struct("G1", {
      dummy_field: bcs.bool(),
    });
  }

  static fromFields(fields: Record<string, any>): G1 {
    return G1.reified().new({ dummyField: decodeFromFields("bool", fields.dummy_field) });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): G1 {
    if (!isG1(item.type)) {
      throw new Error("not a G1 type");
    }

    return G1.reified().new({
      dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
    });
  }

  static fromBcs(data: Uint8Array): G1 {
    return G1.fromFields(G1.bcs.parse(data));
  }

  toJSONField() {
    return {
      dummyField: this.dummyField,
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): G1 {
    return G1.reified().new({ dummyField: decodeFromJSONField("bool", field.dummyField) });
  }

  static fromJSON(json: Record<string, any>): G1 {
    if (json.$typeName !== G1.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return G1.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): G1 {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isG1(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a G1 object`);
    }
    return G1.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): G1 {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isG1(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a G1 object`);
      }

      return G1.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return G1.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<G1> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching G1 object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isG1(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a G1 object`);
    }

    return G1.fromSuiObjectData(res.data);
  }
}
