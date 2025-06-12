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
import { PKG_V11 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isExistStaleOracles(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V11}::obligation::ExistStaleOracles`;
}

export interface ExistStaleOraclesFields {
  dummyField: ToField<"bool">;
}

export type ExistStaleOraclesReified = Reified<ExistStaleOracles, ExistStaleOraclesFields>;

/**
 * Move struct: `ExistStaleOracles`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::obligation`
 */
export class ExistStaleOracles implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V11}::obligation::ExistStaleOracles`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = ExistStaleOracles.$typeName;
  readonly $fullTypeName: `${typeof PKG_V11}::obligation::ExistStaleOracles`;
  readonly $typeArgs: [];
  readonly $isPhantom = ExistStaleOracles.$isPhantom;

  readonly dummyField: ToField<"bool">;

  private constructor(typeArgs: [], fields: ExistStaleOraclesFields) {
    this.$fullTypeName = composeSuiType(
      ExistStaleOracles.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V11}::obligation::ExistStaleOracles`;
    this.$typeArgs = typeArgs;

    this.dummyField = fields.dummyField;
  }

  static reified(): ExistStaleOraclesReified {
    return {
      typeName: ExistStaleOracles.$typeName,
      fullTypeName: composeSuiType(
        ExistStaleOracles.$typeName,
        ...[],
      ) as `${typeof PKG_V11}::obligation::ExistStaleOracles`,
      typeArgs: [] as [],
      isPhantom: ExistStaleOracles.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => ExistStaleOracles.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => ExistStaleOracles.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => ExistStaleOracles.fromBcs(data),
      bcs: ExistStaleOracles.bcs,
      fromJSONField: (field: any) => ExistStaleOracles.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => ExistStaleOracles.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => ExistStaleOracles.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => ExistStaleOracles.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => ExistStaleOracles.fetch(client, id),
      new: (fields: ExistStaleOraclesFields) => {
        return new ExistStaleOracles([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return ExistStaleOracles.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<ExistStaleOracles>> {
    return phantom(ExistStaleOracles.reified());
  }
  static get p() {
    return ExistStaleOracles.phantom();
  }

  static get bcs() {
    return bcs.struct("ExistStaleOracles", {
      dummy_field: bcs.bool(),
    });
  }

  static fromFields(fields: Record<string, any>): ExistStaleOracles {
    return ExistStaleOracles.reified().new({
      dummyField: decodeFromFields("bool", fields.dummy_field),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): ExistStaleOracles {
    if (!isExistStaleOracles(item.type)) {
      throw new Error("not a ExistStaleOracles type");
    }

    return ExistStaleOracles.reified().new({
      dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
    });
  }

  static fromBcs(data: Uint8Array): ExistStaleOracles {
    return ExistStaleOracles.fromFields(ExistStaleOracles.bcs.parse(data));
  }

  toJSONField() {
    return {
      dummyField: this.dummyField,
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): ExistStaleOracles {
    return ExistStaleOracles.reified().new({
      dummyField: decodeFromJSONField("bool", field.dummyField),
    });
  }

  static fromJSON(json: Record<string, any>): ExistStaleOracles {
    if (json.$typeName !== ExistStaleOracles.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return ExistStaleOracles.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): ExistStaleOracles {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isExistStaleOracles(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a ExistStaleOracles object`);
    }
    return ExistStaleOracles.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): ExistStaleOracles {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isExistStaleOracles(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a ExistStaleOracles object`);
      }

      return ExistStaleOracles.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return ExistStaleOracles.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<ExistStaleOracles> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching ExistStaleOracles object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isExistStaleOracles(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a ExistStaleOracles object`);
    }

    return ExistStaleOracles.fromSuiObjectData(res.data);
  }
}
