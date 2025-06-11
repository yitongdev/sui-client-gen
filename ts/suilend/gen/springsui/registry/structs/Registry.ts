import { Bag } from "../../../_dependencies/onchain/0x2/bag/structs/index.js";
import { UID } from "../../../_dependencies/onchain/0x2/object/structs/index.js";
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
import { PKG_V5 } from "../../constants.js";
import { Version } from "../../version/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isRegistry(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V5}::registry::Registry`;
}

export interface RegistryFields {
  id: ToField<UID>;
  version: ToField<Version>;
  table: ToField<Bag>;
}

export type RegistryReified = Reified<Registry, RegistryFields>;

/**
 * Move struct: `Registry`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::registry`
 */
export class Registry implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V5}::registry::Registry`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = Registry.$typeName;
  readonly $fullTypeName: `${typeof PKG_V5}::registry::Registry`;
  readonly $typeArgs: [];
  readonly $isPhantom = Registry.$isPhantom;

  readonly id: ToField<UID>;
  readonly version: ToField<Version>;
  readonly table: ToField<Bag>;

  private constructor(typeArgs: [], fields: RegistryFields) {
    this.$fullTypeName = composeSuiType(
      Registry.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V5}::registry::Registry`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.version = fields.version;
    this.table = fields.table;
  }

  static reified(): RegistryReified {
    return {
      typeName: Registry.$typeName,
      fullTypeName: composeSuiType(
        Registry.$typeName,
        ...[],
      ) as `${typeof PKG_V5}::registry::Registry`,
      typeArgs: [] as [],
      isPhantom: Registry.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => Registry.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        Registry.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => Registry.fromBcs(data),
      bcs: Registry.bcs,
      fromJSONField: (field: any) => Registry.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => Registry.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        Registry.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        Registry.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        Registry.fetch(client, id),
      new: (fields: RegistryFields) => {
        return new Registry([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Registry.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<Registry>> {
    return phantom(Registry.reified());
  }
  static get p() {
    return Registry.phantom();
  }

  static get bcs() {
    return bcs.struct("Registry", {
      id: UID.bcs,
      version: Version.bcs,
      table: Bag.bcs,
    });
  }

  static fromFields(fields: Record<string, any>): Registry {
    return Registry.reified().new({
      id: decodeFromFields(UID.reified(), fields.id),
      version: decodeFromFields(Version.reified(), fields.version),
      table: decodeFromFields(Bag.reified(), fields.table),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): Registry {
    if (!isRegistry(item.type)) {
      throw new Error("not a Registry type");
    }

    return Registry.reified().new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      version: decodeFromFieldsWithTypes(
        Version.reified(),
        item.fields.version,
      ),
      table: decodeFromFieldsWithTypes(Bag.reified(), item.fields.table),
    });
  }

  static fromBcs(data: Uint8Array): Registry {
    return Registry.fromFields(Registry.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
      version: this.version.toJSONField(),
      table: this.table.toJSONField(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): Registry {
    return Registry.reified().new({
      id: decodeFromJSONField(UID.reified(), field.id),
      version: decodeFromJSONField(Version.reified(), field.version),
      table: decodeFromJSONField(Bag.reified(), field.table),
    });
  }

  static fromJSON(json: Record<string, any>): Registry {
    if (json.$typeName !== Registry.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return Registry.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): Registry {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isRegistry(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a Registry object`,
      );
    }
    return Registry.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): Registry {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isRegistry(data.bcs.type)) {
        throw new Error(`object at is not a Registry object`);
      }

      return Registry.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Registry.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<Registry> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching Registry object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isRegistry(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a Registry object`);
    }

    return Registry.fromSuiObjectData(res.data);
  }
}
