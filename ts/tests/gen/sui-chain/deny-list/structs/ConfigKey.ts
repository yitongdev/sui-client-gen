import * as reified from "../../../_framework/reified.js";
import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeStr,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  fieldToJSON,
  phantom,
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../_framework/util.js";
import { Vector } from "../../../_framework/vector.js";
import { PKG_V31 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isConfigKey(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V31}::deny_list::ConfigKey`;
}

export interface ConfigKeyFields {
  perTypeIndex: ToField<"u64">;
  perTypeKey: ToField<Vector<"u8">>;
}

export type ConfigKeyReified = Reified<ConfigKey, ConfigKeyFields>;

/**
 * Move struct: `ConfigKey`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::deny_list`
 */
export class ConfigKey implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::deny_list::ConfigKey`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = ConfigKey.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::deny_list::ConfigKey`;
  readonly $typeArgs: [];
  readonly $isPhantom = ConfigKey.$isPhantom;

  readonly perTypeIndex: ToField<"u64">;
  readonly perTypeKey: ToField<Vector<"u8">>;

  private constructor(typeArgs: [], fields: ConfigKeyFields) {
    this.$fullTypeName = composeSuiType(
      ConfigKey.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::deny_list::ConfigKey`;
    this.$typeArgs = typeArgs;

    this.perTypeIndex = fields.perTypeIndex;
    this.perTypeKey = fields.perTypeKey;
  }

  static reified(): ConfigKeyReified {
    return {
      typeName: ConfigKey.$typeName,
      fullTypeName: composeSuiType(
        ConfigKey.$typeName,
        ...[],
      ) as `${typeof PKG_V31}::deny_list::ConfigKey`,
      typeArgs: [] as [],
      isPhantom: ConfigKey.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => ConfigKey.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        ConfigKey.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => ConfigKey.fromBcs(data),
      bcs: ConfigKey.bcs,
      fromJSONField: (field: any) => ConfigKey.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => ConfigKey.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        ConfigKey.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        ConfigKey.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        ConfigKey.fetch(client, id),
      new: (fields: ConfigKeyFields) => {
        return new ConfigKey([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return ConfigKey.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<ConfigKey>> {
    return phantom(ConfigKey.reified());
  }
  static get p() {
    return ConfigKey.phantom();
  }

  static get bcs() {
    return bcs.struct("ConfigKey", {
      per_type_index: bcs.u64(),
      per_type_key: bcs.vector(bcs.u8()),
    });
  }

  static fromFields(fields: Record<string, any>): ConfigKey {
    return ConfigKey.reified().new({
      perTypeIndex: decodeFromFields("u64", fields.per_type_index),
      perTypeKey: decodeFromFields(reified.vector("u8"), fields.per_type_key),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): ConfigKey {
    if (!isConfigKey(item.type)) {
      throw new Error("not a ConfigKey type");
    }

    return ConfigKey.reified().new({
      perTypeIndex: decodeFromFieldsWithTypes(
        "u64",
        item.fields.per_type_index,
      ),
      perTypeKey: decodeFromFieldsWithTypes(
        reified.vector("u8"),
        item.fields.per_type_key,
      ),
    });
  }

  static fromBcs(data: Uint8Array): ConfigKey {
    return ConfigKey.fromFields(ConfigKey.bcs.parse(data));
  }

  toJSONField() {
    return {
      perTypeIndex: this.perTypeIndex.toString(),
      perTypeKey: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.perTypeKey),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): ConfigKey {
    return ConfigKey.reified().new({
      perTypeIndex: decodeFromJSONField("u64", field.perTypeIndex),
      perTypeKey: decodeFromJSONField(reified.vector("u8"), field.perTypeKey),
    });
  }

  static fromJSON(json: Record<string, any>): ConfigKey {
    if (json.$typeName !== ConfigKey.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return ConfigKey.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): ConfigKey {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isConfigKey(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a ConfigKey object`,
      );
    }
    return ConfigKey.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): ConfigKey {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isConfigKey(data.bcs.type)) {
        throw new Error(`object at is not a ConfigKey object`);
      }

      return ConfigKey.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return ConfigKey.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<ConfigKey> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching ConfigKey object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isConfigKey(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a ConfigKey object`);
    }

    return ConfigKey.fromSuiObjectData(res.data);
  }
}
