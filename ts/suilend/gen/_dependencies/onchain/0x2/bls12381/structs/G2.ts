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

export function isG2(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V35}::bls12381::G2`;
}

export interface G2Fields {
  dummyField: ToField<"bool">;
}

export type G2Reified = Reified<G2, G2Fields>;

/**
 * Move struct: `G2`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::bls12381`
 */
export class G2 implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V35}::bls12381::G2`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = G2.$typeName;
  readonly $fullTypeName: `${typeof PKG_V35}::bls12381::G2`;
  readonly $typeArgs: [];
  readonly $isPhantom = G2.$isPhantom;

  readonly dummyField: ToField<"bool">;

  private constructor(typeArgs: [], fields: G2Fields) {
    this.$fullTypeName = composeSuiType(
      G2.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V35}::bls12381::G2`;
    this.$typeArgs = typeArgs;

    this.dummyField = fields.dummyField;
  }

  static reified(): G2Reified {
    return {
      typeName: G2.$typeName,
      fullTypeName: composeSuiType(G2.$typeName, ...[]) as `${typeof PKG_V35}::bls12381::G2`,
      typeArgs: [] as [],
      isPhantom: G2.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => G2.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => G2.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => G2.fromBcs(data),
      bcs: G2.bcs,
      fromJSONField: (field: any) => G2.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => G2.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => G2.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => G2.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => G2.fetch(client, id),
      new: (fields: G2Fields) => {
        return new G2([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return G2.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<G2>> {
    return phantom(G2.reified());
  }
  static get p() {
    return G2.phantom();
  }

  static get bcs() {
    return bcs.struct("G2", {
      dummy_field: bcs.bool(),
    });
  }

  static fromFields(fields: Record<string, any>): G2 {
    return G2.reified().new({ dummyField: decodeFromFields("bool", fields.dummy_field) });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): G2 {
    if (!isG2(item.type)) {
      throw new Error("not a G2 type");
    }

    return G2.reified().new({
      dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
    });
  }

  static fromBcs(data: Uint8Array): G2 {
    return G2.fromFields(G2.bcs.parse(data));
  }

  toJSONField() {
    return {
      dummyField: this.dummyField,
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): G2 {
    return G2.reified().new({ dummyField: decodeFromJSONField("bool", field.dummyField) });
  }

  static fromJSON(json: Record<string, any>): G2 {
    if (json.$typeName !== G2.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return G2.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): G2 {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isG2(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a G2 object`);
    }
    return G2.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): G2 {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isG2(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a G2 object`);
      }

      return G2.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return G2.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<G2> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching G2 object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isG2(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a G2 object`);
    }

    return G2.fromSuiObjectData(res.data);
  }
}
