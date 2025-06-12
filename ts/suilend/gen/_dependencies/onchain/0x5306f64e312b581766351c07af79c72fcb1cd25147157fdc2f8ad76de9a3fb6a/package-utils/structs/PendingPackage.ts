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
import { PKG_V1 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isPendingPackage(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::package_utils::PendingPackage`;
}

export interface PendingPackageFields {
  dummyField: ToField<"bool">;
}

export type PendingPackageReified = Reified<PendingPackage, PendingPackageFields>;

/**
 * Move struct: `PendingPackage`
 * Module: `5306f64e312b581766351c07af79c72fcb1cd25147157fdc2f8ad76de9a3fb6a::package_utils`
 */
export class PendingPackage implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::package_utils::PendingPackage`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = PendingPackage.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::package_utils::PendingPackage`;
  readonly $typeArgs: [];
  readonly $isPhantom = PendingPackage.$isPhantom;

  readonly dummyField: ToField<"bool">;

  private constructor(typeArgs: [], fields: PendingPackageFields) {
    this.$fullTypeName = composeSuiType(
      PendingPackage.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::package_utils::PendingPackage`;
    this.$typeArgs = typeArgs;

    this.dummyField = fields.dummyField;
  }

  static reified(): PendingPackageReified {
    return {
      typeName: PendingPackage.$typeName,
      fullTypeName: composeSuiType(
        PendingPackage.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::package_utils::PendingPackage`,
      typeArgs: [] as [],
      isPhantom: PendingPackage.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => PendingPackage.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => PendingPackage.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => PendingPackage.fromBcs(data),
      bcs: PendingPackage.bcs,
      fromJSONField: (field: any) => PendingPackage.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => PendingPackage.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => PendingPackage.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => PendingPackage.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => PendingPackage.fetch(client, id),
      new: (fields: PendingPackageFields) => {
        return new PendingPackage([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return PendingPackage.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<PendingPackage>> {
    return phantom(PendingPackage.reified());
  }
  static get p() {
    return PendingPackage.phantom();
  }

  static get bcs() {
    return bcs.struct("PendingPackage", {
      dummy_field: bcs.bool(),
    });
  }

  static fromFields(fields: Record<string, any>): PendingPackage {
    return PendingPackage.reified().new({
      dummyField: decodeFromFields("bool", fields.dummy_field),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): PendingPackage {
    if (!isPendingPackage(item.type)) {
      throw new Error("not a PendingPackage type");
    }

    return PendingPackage.reified().new({
      dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
    });
  }

  static fromBcs(data: Uint8Array): PendingPackage {
    return PendingPackage.fromFields(PendingPackage.bcs.parse(data));
  }

  toJSONField() {
    return {
      dummyField: this.dummyField,
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): PendingPackage {
    return PendingPackage.reified().new({
      dummyField: decodeFromJSONField("bool", field.dummyField),
    });
  }

  static fromJSON(json: Record<string, any>): PendingPackage {
    if (json.$typeName !== PendingPackage.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return PendingPackage.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): PendingPackage {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isPendingPackage(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a PendingPackage object`);
    }
    return PendingPackage.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): PendingPackage {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isPendingPackage(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a PendingPackage object`);
      }

      return PendingPackage.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return PendingPackage.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<PendingPackage> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching PendingPackage object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isPendingPackage(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a PendingPackage object`);
    }

    return PendingPackage.fromSuiObjectData(res.data);
  }
}
