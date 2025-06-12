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

export function isUncompressedG1(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V31}::bls12381::UncompressedG1`;
}

export interface UncompressedG1Fields {
  dummyField: ToField<"bool">;
}

export type UncompressedG1Reified = Reified<UncompressedG1, UncompressedG1Fields>;

/**
 * Move struct: `UncompressedG1`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::bls12381`
 */
export class UncompressedG1 implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::bls12381::UncompressedG1`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = UncompressedG1.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::bls12381::UncompressedG1`;
  readonly $typeArgs: [];
  readonly $isPhantom = UncompressedG1.$isPhantom;

  readonly dummyField: ToField<"bool">;

  private constructor(typeArgs: [], fields: UncompressedG1Fields) {
    this.$fullTypeName = composeSuiType(
      UncompressedG1.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::bls12381::UncompressedG1`;
    this.$typeArgs = typeArgs;

    this.dummyField = fields.dummyField;
  }

  static reified(): UncompressedG1Reified {
    return {
      typeName: UncompressedG1.$typeName,
      fullTypeName: composeSuiType(
        UncompressedG1.$typeName,
        ...[],
      ) as `${typeof PKG_V31}::bls12381::UncompressedG1`,
      typeArgs: [] as [],
      isPhantom: UncompressedG1.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => UncompressedG1.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => UncompressedG1.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => UncompressedG1.fromBcs(data),
      bcs: UncompressedG1.bcs,
      fromJSONField: (field: any) => UncompressedG1.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => UncompressedG1.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => UncompressedG1.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => UncompressedG1.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => UncompressedG1.fetch(client, id),
      new: (fields: UncompressedG1Fields) => {
        return new UncompressedG1([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return UncompressedG1.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<UncompressedG1>> {
    return phantom(UncompressedG1.reified());
  }
  static get p() {
    return UncompressedG1.phantom();
  }

  static get bcs() {
    return bcs.struct("UncompressedG1", {
      dummy_field: bcs.bool(),
    });
  }

  static fromFields(fields: Record<string, any>): UncompressedG1 {
    return UncompressedG1.reified().new({
      dummyField: decodeFromFields("bool", fields.dummy_field),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): UncompressedG1 {
    if (!isUncompressedG1(item.type)) {
      throw new Error("not a UncompressedG1 type");
    }

    return UncompressedG1.reified().new({
      dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
    });
  }

  static fromBcs(data: Uint8Array): UncompressedG1 {
    return UncompressedG1.fromFields(UncompressedG1.bcs.parse(data));
  }

  toJSONField() {
    return {
      dummyField: this.dummyField,
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): UncompressedG1 {
    return UncompressedG1.reified().new({
      dummyField: decodeFromJSONField("bool", field.dummyField),
    });
  }

  static fromJSON(json: Record<string, any>): UncompressedG1 {
    if (json.$typeName !== UncompressedG1.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return UncompressedG1.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): UncompressedG1 {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isUncompressedG1(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a UncompressedG1 object`);
    }
    return UncompressedG1.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): UncompressedG1 {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isUncompressedG1(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a UncompressedG1 object`);
      }

      return UncompressedG1.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return UncompressedG1.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<UncompressedG1> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching UncompressedG1 object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isUncompressedG1(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a UncompressedG1 object`);
    }

    return UncompressedG1.fromSuiObjectData(res.data);
  }
}
