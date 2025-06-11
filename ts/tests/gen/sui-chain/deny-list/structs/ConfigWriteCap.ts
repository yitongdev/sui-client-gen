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
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../_framework/util.js";
import { PKG_V31 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isConfigWriteCap(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V31}::deny_list::ConfigWriteCap`;
}

export interface ConfigWriteCapFields {
  dummyField: ToField<"bool">;
}

export type ConfigWriteCapReified = Reified<
  ConfigWriteCap,
  ConfigWriteCapFields
>;

/**
 * Move struct: `ConfigWriteCap`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::deny_list`
 */
export class ConfigWriteCap implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::deny_list::ConfigWriteCap`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = ConfigWriteCap.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::deny_list::ConfigWriteCap`;
  readonly $typeArgs: [];
  readonly $isPhantom = ConfigWriteCap.$isPhantom;

  readonly dummyField: ToField<"bool">;

  private constructor(typeArgs: [], fields: ConfigWriteCapFields) {
    this.$fullTypeName = composeSuiType(
      ConfigWriteCap.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::deny_list::ConfigWriteCap`;
    this.$typeArgs = typeArgs;

    this.dummyField = fields.dummyField;
  }

  static reified(): ConfigWriteCapReified {
    return {
      typeName: ConfigWriteCap.$typeName,
      fullTypeName: composeSuiType(
        ConfigWriteCap.$typeName,
        ...[],
      ) as `${typeof PKG_V31}::deny_list::ConfigWriteCap`,
      typeArgs: [] as [],
      isPhantom: ConfigWriteCap.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        ConfigWriteCap.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        ConfigWriteCap.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => ConfigWriteCap.fromBcs(data),
      bcs: ConfigWriteCap.bcs,
      fromJSONField: (field: any) => ConfigWriteCap.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => ConfigWriteCap.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        ConfigWriteCap.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        ConfigWriteCap.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        ConfigWriteCap.fetch(client, id),
      new: (fields: ConfigWriteCapFields) => {
        return new ConfigWriteCap([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return ConfigWriteCap.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<ConfigWriteCap>> {
    return phantom(ConfigWriteCap.reified());
  }
  static get p() {
    return ConfigWriteCap.phantom();
  }

  static get bcs() {
    return bcs.struct("ConfigWriteCap", {
      dummy_field: bcs.bool(),
    });
  }

  static fromFields(fields: Record<string, any>): ConfigWriteCap {
    return ConfigWriteCap.reified().new({
      dummyField: decodeFromFields("bool", fields.dummy_field),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): ConfigWriteCap {
    if (!isConfigWriteCap(item.type)) {
      throw new Error("not a ConfigWriteCap type");
    }

    return ConfigWriteCap.reified().new({
      dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
    });
  }

  static fromBcs(data: Uint8Array): ConfigWriteCap {
    return ConfigWriteCap.fromFields(ConfigWriteCap.bcs.parse(data));
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

  static fromJSONField(field: any): ConfigWriteCap {
    return ConfigWriteCap.reified().new({
      dummyField: decodeFromJSONField("bool", field.dummyField),
    });
  }

  static fromJSON(json: Record<string, any>): ConfigWriteCap {
    if (json.$typeName !== ConfigWriteCap.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return ConfigWriteCap.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): ConfigWriteCap {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isConfigWriteCap(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a ConfigWriteCap object`,
      );
    }
    return ConfigWriteCap.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): ConfigWriteCap {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isConfigWriteCap(data.bcs.type)
      ) {
        throw new Error(`object at is not a ConfigWriteCap object`);
      }

      return ConfigWriteCap.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return ConfigWriteCap.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<ConfigWriteCap> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching ConfigWriteCap object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isConfigWriteCap(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a ConfigWriteCap object`);
    }

    return ConfigWriteCap.fromSuiObjectData(res.data);
  }
}
