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

export function isCurrentVersion(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::package_utils::CurrentVersion`;
}

export interface CurrentVersionFields {
  dummyField: ToField<"bool">;
}

export type CurrentVersionReified = Reified<
  CurrentVersion,
  CurrentVersionFields
>;

/**
 * Move struct: `CurrentVersion`
 * Module: `5306f64e312b581766351c07af79c72fcb1cd25147157fdc2f8ad76de9a3fb6a::package_utils`
 */
export class CurrentVersion implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::package_utils::CurrentVersion`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = CurrentVersion.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::package_utils::CurrentVersion`;
  readonly $typeArgs: [];
  readonly $isPhantom = CurrentVersion.$isPhantom;

  readonly dummyField: ToField<"bool">;

  private constructor(typeArgs: [], fields: CurrentVersionFields) {
    this.$fullTypeName = composeSuiType(
      CurrentVersion.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::package_utils::CurrentVersion`;
    this.$typeArgs = typeArgs;

    this.dummyField = fields.dummyField;
  }

  static reified(): CurrentVersionReified {
    return {
      typeName: CurrentVersion.$typeName,
      fullTypeName: composeSuiType(
        CurrentVersion.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::package_utils::CurrentVersion`,
      typeArgs: [] as [],
      isPhantom: CurrentVersion.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        CurrentVersion.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        CurrentVersion.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => CurrentVersion.fromBcs(data),
      bcs: CurrentVersion.bcs,
      fromJSONField: (field: any) => CurrentVersion.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => CurrentVersion.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        CurrentVersion.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        CurrentVersion.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        CurrentVersion.fetch(client, id),
      new: (fields: CurrentVersionFields) => {
        return new CurrentVersion([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return CurrentVersion.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<CurrentVersion>> {
    return phantom(CurrentVersion.reified());
  }
  static get p() {
    return CurrentVersion.phantom();
  }

  static get bcs() {
    return bcs.struct("CurrentVersion", {
      dummy_field: bcs.bool(),
    });
  }

  static fromFields(fields: Record<string, any>): CurrentVersion {
    return CurrentVersion.reified().new({
      dummyField: decodeFromFields("bool", fields.dummy_field),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): CurrentVersion {
    if (!isCurrentVersion(item.type)) {
      throw new Error("not a CurrentVersion type");
    }

    return CurrentVersion.reified().new({
      dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
    });
  }

  static fromBcs(data: Uint8Array): CurrentVersion {
    return CurrentVersion.fromFields(CurrentVersion.bcs.parse(data));
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

  static fromJSONField(field: any): CurrentVersion {
    return CurrentVersion.reified().new({
      dummyField: decodeFromJSONField("bool", field.dummyField),
    });
  }

  static fromJSON(json: Record<string, any>): CurrentVersion {
    if (json.$typeName !== CurrentVersion.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return CurrentVersion.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): CurrentVersion {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isCurrentVersion(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a CurrentVersion object`,
      );
    }
    return CurrentVersion.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): CurrentVersion {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isCurrentVersion(data.bcs.type)
      ) {
        throw new Error(`object at is not a CurrentVersion object`);
      }

      return CurrentVersion.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return CurrentVersion.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<CurrentVersion> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching CurrentVersion object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isCurrentVersion(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a CurrentVersion object`);
    }

    return CurrentVersion.fromSuiObjectData(res.data);
  }
}
