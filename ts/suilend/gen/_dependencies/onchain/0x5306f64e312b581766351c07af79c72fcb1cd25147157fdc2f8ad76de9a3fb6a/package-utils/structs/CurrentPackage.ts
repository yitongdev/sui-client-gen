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

export function isCurrentPackage(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::package_utils::CurrentPackage`;
}

export interface CurrentPackageFields {
  dummyField: ToField<"bool">;
}

export type CurrentPackageReified = Reified<
  CurrentPackage,
  CurrentPackageFields
>;

/**
 * Move struct: `CurrentPackage`
 * Module: `5306f64e312b581766351c07af79c72fcb1cd25147157fdc2f8ad76de9a3fb6a::package_utils`
 */
export class CurrentPackage implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::package_utils::CurrentPackage`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = CurrentPackage.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::package_utils::CurrentPackage`;
  readonly $typeArgs: [];
  readonly $isPhantom = CurrentPackage.$isPhantom;

  readonly dummyField: ToField<"bool">;

  private constructor(typeArgs: [], fields: CurrentPackageFields) {
    this.$fullTypeName = composeSuiType(
      CurrentPackage.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::package_utils::CurrentPackage`;
    this.$typeArgs = typeArgs;

    this.dummyField = fields.dummyField;
  }

  static reified(): CurrentPackageReified {
    return {
      typeName: CurrentPackage.$typeName,
      fullTypeName: composeSuiType(
        CurrentPackage.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::package_utils::CurrentPackage`,
      typeArgs: [] as [],
      isPhantom: CurrentPackage.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        CurrentPackage.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        CurrentPackage.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => CurrentPackage.fromBcs(data),
      bcs: CurrentPackage.bcs,
      fromJSONField: (field: any) => CurrentPackage.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => CurrentPackage.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        CurrentPackage.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        CurrentPackage.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        CurrentPackage.fetch(client, id),
      new: (fields: CurrentPackageFields) => {
        return new CurrentPackage([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return CurrentPackage.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<CurrentPackage>> {
    return phantom(CurrentPackage.reified());
  }
  static get p() {
    return CurrentPackage.phantom();
  }

  static get bcs() {
    return bcs.struct("CurrentPackage", {
      dummy_field: bcs.bool(),
    });
  }

  static fromFields(fields: Record<string, any>): CurrentPackage {
    return CurrentPackage.reified().new({
      dummyField: decodeFromFields("bool", fields.dummy_field),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): CurrentPackage {
    if (!isCurrentPackage(item.type)) {
      throw new Error("not a CurrentPackage type");
    }

    return CurrentPackage.reified().new({
      dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
    });
  }

  static fromBcs(data: Uint8Array): CurrentPackage {
    return CurrentPackage.fromFields(CurrentPackage.bcs.parse(data));
  }

  toJSONField() {
    return {
      dummyField: this.dummyField,
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): CurrentPackage {
    return CurrentPackage.reified().new({
      dummyField: decodeFromJSONField("bool", field.dummyField),
    });
  }

  static fromJSON(json: Record<string, any>): CurrentPackage {
    if (json.$typeName !== CurrentPackage.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return CurrentPackage.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): CurrentPackage {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isCurrentPackage(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a CurrentPackage object`,
      );
    }
    return CurrentPackage.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): CurrentPackage {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isCurrentPackage(data.bcs.type)
      ) {
        throw new Error(`object at is not a CurrentPackage object`);
      }

      return CurrentPackage.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return CurrentPackage.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<CurrentPackage> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching CurrentPackage object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isCurrentPackage(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a CurrentPackage object`);
    }

    return CurrentPackage.fromSuiObjectData(res.data);
  }
}
