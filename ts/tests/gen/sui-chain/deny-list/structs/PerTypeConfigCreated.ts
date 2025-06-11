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
import { ID } from "../../object/structs/index.js";
import { ConfigKey as ConfigKey1 } from "./ConfigKey.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isPerTypeConfigCreated(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V31}::deny_list::PerTypeConfigCreated`;
}

export interface PerTypeConfigCreatedFields {
  key: ToField<ConfigKey1>;
  configId: ToField<ID>;
}

export type PerTypeConfigCreatedReified = Reified<
  PerTypeConfigCreated,
  PerTypeConfigCreatedFields
>;

/**
 * Move struct: `PerTypeConfigCreated`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::deny_list`
 */
export class PerTypeConfigCreated implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::deny_list::PerTypeConfigCreated`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = PerTypeConfigCreated.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::deny_list::PerTypeConfigCreated`;
  readonly $typeArgs: [];
  readonly $isPhantom = PerTypeConfigCreated.$isPhantom;

  readonly key: ToField<ConfigKey1>;
  readonly configId: ToField<ID>;

  private constructor(typeArgs: [], fields: PerTypeConfigCreatedFields) {
    this.$fullTypeName = composeSuiType(
      PerTypeConfigCreated.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::deny_list::PerTypeConfigCreated`;
    this.$typeArgs = typeArgs;

    this.key = fields.key;
    this.configId = fields.configId;
  }

  static reified(): PerTypeConfigCreatedReified {
    return {
      typeName: PerTypeConfigCreated.$typeName,
      fullTypeName: composeSuiType(
        PerTypeConfigCreated.$typeName,
        ...[],
      ) as `${typeof PKG_V31}::deny_list::PerTypeConfigCreated`,
      typeArgs: [] as [],
      isPhantom: PerTypeConfigCreated.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        PerTypeConfigCreated.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        PerTypeConfigCreated.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => PerTypeConfigCreated.fromBcs(data),
      bcs: PerTypeConfigCreated.bcs,
      fromJSONField: (field: any) => PerTypeConfigCreated.fromJSONField(field),
      fromJSON: (json: Record<string, any>) =>
        PerTypeConfigCreated.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        PerTypeConfigCreated.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        PerTypeConfigCreated.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        PerTypeConfigCreated.fetch(client, id),
      new: (fields: PerTypeConfigCreatedFields) => {
        return new PerTypeConfigCreated([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return PerTypeConfigCreated.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<PerTypeConfigCreated>> {
    return phantom(PerTypeConfigCreated.reified());
  }
  static get p() {
    return PerTypeConfigCreated.phantom();
  }

  static get bcs() {
    return bcs.struct("PerTypeConfigCreated", {
      key: ConfigKey1.bcs,
      config_id: ID.bcs,
    });
  }

  static fromFields(fields: Record<string, any>): PerTypeConfigCreated {
    return PerTypeConfigCreated.reified().new({
      key: decodeFromFields(ConfigKey1.reified(), fields.key),
      configId: decodeFromFields(ID.reified(), fields.config_id),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): PerTypeConfigCreated {
    if (!isPerTypeConfigCreated(item.type)) {
      throw new Error("not a PerTypeConfigCreated type");
    }

    return PerTypeConfigCreated.reified().new({
      key: decodeFromFieldsWithTypes(ConfigKey1.reified(), item.fields.key),
      configId: decodeFromFieldsWithTypes(ID.reified(), item.fields.config_id),
    });
  }

  static fromBcs(data: Uint8Array): PerTypeConfigCreated {
    return PerTypeConfigCreated.fromFields(
      PerTypeConfigCreated.bcs.parse(data),
    );
  }

  toJSONField() {
    return {
      key: this.key.toJSONField(),
      configId: this.configId,
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): PerTypeConfigCreated {
    return PerTypeConfigCreated.reified().new({
      key: decodeFromJSONField(ConfigKey1.reified(), field.key),
      configId: decodeFromJSONField(ID.reified(), field.configId),
    });
  }

  static fromJSON(json: Record<string, any>): PerTypeConfigCreated {
    if (json.$typeName !== PerTypeConfigCreated.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return PerTypeConfigCreated.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): PerTypeConfigCreated {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isPerTypeConfigCreated(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a PerTypeConfigCreated object`,
      );
    }
    return PerTypeConfigCreated.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): PerTypeConfigCreated {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isPerTypeConfigCreated(data.bcs.type)
      ) {
        throw new Error(`object at is not a PerTypeConfigCreated object`);
      }

      return PerTypeConfigCreated.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return PerTypeConfigCreated.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(
    client: SuiClient,
    id: string,
  ): Promise<PerTypeConfigCreated> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching PerTypeConfigCreated object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isPerTypeConfigCreated(res.data.bcs.type)
    ) {
      throw new Error(
        `object at id ${id} is not a PerTypeConfigCreated object`,
      );
    }

    return PerTypeConfigCreated.fromSuiObjectData(res.data);
  }
}
