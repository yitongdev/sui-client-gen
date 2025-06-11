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
import { Bag } from "../../bag/structs/index.js";
import { PKG_V31 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isExtension(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V31}::kiosk_extension::Extension`;
}

export interface ExtensionFields {
  storage: ToField<Bag>;
  permissions: ToField<"u128">;
  isEnabled: ToField<"bool">;
}

export type ExtensionReified = Reified<Extension, ExtensionFields>;

/**
 * Move struct: `Extension`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk_extension`
 */
export class Extension implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::kiosk_extension::Extension`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = Extension.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::kiosk_extension::Extension`;
  readonly $typeArgs: [];
  readonly $isPhantom = Extension.$isPhantom;

  readonly storage: ToField<Bag>;
  readonly permissions: ToField<"u128">;
  readonly isEnabled: ToField<"bool">;

  private constructor(typeArgs: [], fields: ExtensionFields) {
    this.$fullTypeName = composeSuiType(
      Extension.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::kiosk_extension::Extension`;
    this.$typeArgs = typeArgs;

    this.storage = fields.storage;
    this.permissions = fields.permissions;
    this.isEnabled = fields.isEnabled;
  }

  static reified(): ExtensionReified {
    return {
      typeName: Extension.$typeName,
      fullTypeName: composeSuiType(
        Extension.$typeName,
        ...[],
      ) as `${typeof PKG_V31}::kiosk_extension::Extension`,
      typeArgs: [] as [],
      isPhantom: Extension.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => Extension.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        Extension.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => Extension.fromBcs(data),
      bcs: Extension.bcs,
      fromJSONField: (field: any) => Extension.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => Extension.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        Extension.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        Extension.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        Extension.fetch(client, id),
      new: (fields: ExtensionFields) => {
        return new Extension([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Extension.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<Extension>> {
    return phantom(Extension.reified());
  }
  static get p() {
    return Extension.phantom();
  }

  static get bcs() {
    return bcs.struct("Extension", {
      storage: Bag.bcs,
      permissions: bcs.u128(),
      is_enabled: bcs.bool(),
    });
  }

  static fromFields(fields: Record<string, any>): Extension {
    return Extension.reified().new({
      storage: decodeFromFields(Bag.reified(), fields.storage),
      permissions: decodeFromFields("u128", fields.permissions),
      isEnabled: decodeFromFields("bool", fields.is_enabled),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): Extension {
    if (!isExtension(item.type)) {
      throw new Error("not a Extension type");
    }

    return Extension.reified().new({
      storage: decodeFromFieldsWithTypes(Bag.reified(), item.fields.storage),
      permissions: decodeFromFieldsWithTypes("u128", item.fields.permissions),
      isEnabled: decodeFromFieldsWithTypes("bool", item.fields.is_enabled),
    });
  }

  static fromBcs(data: Uint8Array): Extension {
    return Extension.fromFields(Extension.bcs.parse(data));
  }

  toJSONField() {
    return {
      storage: this.storage.toJSONField(),
      permissions: this.permissions.toString(),
      isEnabled: this.isEnabled,
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): Extension {
    return Extension.reified().new({
      storage: decodeFromJSONField(Bag.reified(), field.storage),
      permissions: decodeFromJSONField("u128", field.permissions),
      isEnabled: decodeFromJSONField("bool", field.isEnabled),
    });
  }

  static fromJSON(json: Record<string, any>): Extension {
    if (json.$typeName !== Extension.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return Extension.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): Extension {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isExtension(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a Extension object`,
      );
    }
    return Extension.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): Extension {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isExtension(data.bcs.type)) {
        throw new Error(`object at is not a Extension object`);
      }

      return Extension.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Extension.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<Extension> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching Extension object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isExtension(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a Extension object`);
    }

    return Extension.fromSuiObjectData(res.data);
  }
}
