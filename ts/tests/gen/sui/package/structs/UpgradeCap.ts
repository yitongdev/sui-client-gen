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
import { ID, UID } from "../../object/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isUpgradeCap(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V31}::package::UpgradeCap`;
}

export interface UpgradeCapFields {
  id: ToField<UID>;
  package: ToField<ID>;
  version: ToField<"u64">;
  policy: ToField<"u8">;
}

export type UpgradeCapReified = Reified<UpgradeCap, UpgradeCapFields>;

/**
 * Move struct: `UpgradeCap`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::package`
 */
export class UpgradeCap implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::package::UpgradeCap`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = UpgradeCap.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::package::UpgradeCap`;
  readonly $typeArgs: [];
  readonly $isPhantom = UpgradeCap.$isPhantom;

  readonly id: ToField<UID>;
  readonly package: ToField<ID>;
  readonly version: ToField<"u64">;
  readonly policy: ToField<"u8">;

  private constructor(typeArgs: [], fields: UpgradeCapFields) {
    this.$fullTypeName = composeSuiType(
      UpgradeCap.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::package::UpgradeCap`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.package = fields.package;
    this.version = fields.version;
    this.policy = fields.policy;
  }

  static reified(): UpgradeCapReified {
    return {
      typeName: UpgradeCap.$typeName,
      fullTypeName: composeSuiType(
        UpgradeCap.$typeName,
        ...[],
      ) as `${typeof PKG_V31}::package::UpgradeCap`,
      typeArgs: [] as [],
      isPhantom: UpgradeCap.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => UpgradeCap.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => UpgradeCap.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => UpgradeCap.fromBcs(data),
      bcs: UpgradeCap.bcs,
      fromJSONField: (field: any) => UpgradeCap.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => UpgradeCap.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => UpgradeCap.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => UpgradeCap.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => UpgradeCap.fetch(client, id),
      new: (fields: UpgradeCapFields) => {
        return new UpgradeCap([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return UpgradeCap.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<UpgradeCap>> {
    return phantom(UpgradeCap.reified());
  }
  static get p() {
    return UpgradeCap.phantom();
  }

  static get bcs() {
    return bcs.struct("UpgradeCap", {
      id: UID.bcs,
      package: ID.bcs,
      version: bcs.u64(),
      policy: bcs.u8(),
    });
  }

  static fromFields(fields: Record<string, any>): UpgradeCap {
    return UpgradeCap.reified().new({
      id: decodeFromFields(UID.reified(), fields.id),
      package: decodeFromFields(ID.reified(), fields.package),
      version: decodeFromFields("u64", fields.version),
      policy: decodeFromFields("u8", fields.policy),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): UpgradeCap {
    if (!isUpgradeCap(item.type)) {
      throw new Error("not a UpgradeCap type");
    }

    return UpgradeCap.reified().new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      package: decodeFromFieldsWithTypes(ID.reified(), item.fields.package),
      version: decodeFromFieldsWithTypes("u64", item.fields.version),
      policy: decodeFromFieldsWithTypes("u8", item.fields.policy),
    });
  }

  static fromBcs(data: Uint8Array): UpgradeCap {
    return UpgradeCap.fromFields(UpgradeCap.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
      package: this.package,
      version: this.version.toString(),
      policy: this.policy,
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): UpgradeCap {
    return UpgradeCap.reified().new({
      id: decodeFromJSONField(UID.reified(), field.id),
      package: decodeFromJSONField(ID.reified(), field.package),
      version: decodeFromJSONField("u64", field.version),
      policy: decodeFromJSONField("u8", field.policy),
    });
  }

  static fromJSON(json: Record<string, any>): UpgradeCap {
    if (json.$typeName !== UpgradeCap.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return UpgradeCap.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): UpgradeCap {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isUpgradeCap(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a UpgradeCap object`);
    }
    return UpgradeCap.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): UpgradeCap {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isUpgradeCap(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a UpgradeCap object`);
      }

      return UpgradeCap.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return UpgradeCap.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<UpgradeCap> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching UpgradeCap object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isUpgradeCap(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a UpgradeCap object`);
    }

    return UpgradeCap.fromSuiObjectData(res.data);
  }
}
