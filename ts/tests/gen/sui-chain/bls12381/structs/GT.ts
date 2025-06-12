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

export function isGT(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V31}::bls12381::GT`;
}

export interface GTFields {
  dummyField: ToField<"bool">;
}

export type GTReified = Reified<GT, GTFields>;

/**
 * Move struct: `GT`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::bls12381`
 */
export class GT implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::bls12381::GT`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = GT.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::bls12381::GT`;
  readonly $typeArgs: [];
  readonly $isPhantom = GT.$isPhantom;

  readonly dummyField: ToField<"bool">;

  private constructor(typeArgs: [], fields: GTFields) {
    this.$fullTypeName = composeSuiType(
      GT.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::bls12381::GT`;
    this.$typeArgs = typeArgs;

    this.dummyField = fields.dummyField;
  }

  static reified(): GTReified {
    return {
      typeName: GT.$typeName,
      fullTypeName: composeSuiType(GT.$typeName, ...[]) as `${typeof PKG_V31}::bls12381::GT`,
      typeArgs: [] as [],
      isPhantom: GT.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => GT.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => GT.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => GT.fromBcs(data),
      bcs: GT.bcs,
      fromJSONField: (field: any) => GT.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => GT.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => GT.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => GT.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => GT.fetch(client, id),
      new: (fields: GTFields) => {
        return new GT([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return GT.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<GT>> {
    return phantom(GT.reified());
  }
  static get p() {
    return GT.phantom();
  }

  static get bcs() {
    return bcs.struct("GT", {
      dummy_field: bcs.bool(),
    });
  }

  static fromFields(fields: Record<string, any>): GT {
    return GT.reified().new({ dummyField: decodeFromFields("bool", fields.dummy_field) });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): GT {
    if (!isGT(item.type)) {
      throw new Error("not a GT type");
    }

    return GT.reified().new({
      dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
    });
  }

  static fromBcs(data: Uint8Array): GT {
    return GT.fromFields(GT.bcs.parse(data));
  }

  toJSONField() {
    return {
      dummyField: this.dummyField,
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): GT {
    return GT.reified().new({ dummyField: decodeFromJSONField("bool", field.dummyField) });
  }

  static fromJSON(json: Record<string, any>): GT {
    if (json.$typeName !== GT.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return GT.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): GT {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isGT(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a GT object`);
    }
    return GT.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): GT {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isGT(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a GT object`);
      }

      return GT.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return GT.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<GT> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching GT object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isGT(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a GT object`);
    }

    return GT.fromSuiObjectData(res.data);
  }
}
