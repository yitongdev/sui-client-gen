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
import { PKG_V35 } from "../../constants.js";
import { ID } from "../../object/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isUpgradeReceipt(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V35}::package::UpgradeReceipt`;
}

export interface UpgradeReceiptFields {
  cap: ToField<ID>;
  package: ToField<ID>;
}

export type UpgradeReceiptReified = Reified<UpgradeReceipt, UpgradeReceiptFields>;

/**
 * Move struct: `UpgradeReceipt`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::package`
 */
export class UpgradeReceipt implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V35}::package::UpgradeReceipt`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = UpgradeReceipt.$typeName;
  readonly $fullTypeName: `${typeof PKG_V35}::package::UpgradeReceipt`;
  readonly $typeArgs: [];
  readonly $isPhantom = UpgradeReceipt.$isPhantom;

  readonly cap: ToField<ID>;
  readonly package: ToField<ID>;

  private constructor(typeArgs: [], fields: UpgradeReceiptFields) {
    this.$fullTypeName = composeSuiType(
      UpgradeReceipt.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V35}::package::UpgradeReceipt`;
    this.$typeArgs = typeArgs;

    this.cap = fields.cap;
    this.package = fields.package;
  }

  static reified(): UpgradeReceiptReified {
    return {
      typeName: UpgradeReceipt.$typeName,
      fullTypeName: composeSuiType(
        UpgradeReceipt.$typeName,
        ...[],
      ) as `${typeof PKG_V35}::package::UpgradeReceipt`,
      typeArgs: [] as [],
      isPhantom: UpgradeReceipt.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => UpgradeReceipt.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => UpgradeReceipt.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => UpgradeReceipt.fromBcs(data),
      bcs: UpgradeReceipt.bcs,
      fromJSONField: (field: any) => UpgradeReceipt.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => UpgradeReceipt.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => UpgradeReceipt.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => UpgradeReceipt.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => UpgradeReceipt.fetch(client, id),
      new: (fields: UpgradeReceiptFields) => {
        return new UpgradeReceipt([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return UpgradeReceipt.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<UpgradeReceipt>> {
    return phantom(UpgradeReceipt.reified());
  }
  static get p() {
    return UpgradeReceipt.phantom();
  }

  static get bcs() {
    return bcs.struct("UpgradeReceipt", {
      cap: ID.bcs,
      package: ID.bcs,
    });
  }

  static fromFields(fields: Record<string, any>): UpgradeReceipt {
    return UpgradeReceipt.reified().new({
      cap: decodeFromFields(ID.reified(), fields.cap),
      package: decodeFromFields(ID.reified(), fields.package),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): UpgradeReceipt {
    if (!isUpgradeReceipt(item.type)) {
      throw new Error("not a UpgradeReceipt type");
    }

    return UpgradeReceipt.reified().new({
      cap: decodeFromFieldsWithTypes(ID.reified(), item.fields.cap),
      package: decodeFromFieldsWithTypes(ID.reified(), item.fields.package),
    });
  }

  static fromBcs(data: Uint8Array): UpgradeReceipt {
    return UpgradeReceipt.fromFields(UpgradeReceipt.bcs.parse(data));
  }

  toJSONField() {
    return {
      cap: this.cap,
      package: this.package,
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): UpgradeReceipt {
    return UpgradeReceipt.reified().new({
      cap: decodeFromJSONField(ID.reified(), field.cap),
      package: decodeFromJSONField(ID.reified(), field.package),
    });
  }

  static fromJSON(json: Record<string, any>): UpgradeReceipt {
    if (json.$typeName !== UpgradeReceipt.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return UpgradeReceipt.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): UpgradeReceipt {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isUpgradeReceipt(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a UpgradeReceipt object`);
    }
    return UpgradeReceipt.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): UpgradeReceipt {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isUpgradeReceipt(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a UpgradeReceipt object`);
      }

      return UpgradeReceipt.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return UpgradeReceipt.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<UpgradeReceipt> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching UpgradeReceipt object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isUpgradeReceipt(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a UpgradeReceipt object`);
    }

    return UpgradeReceipt.fromSuiObjectData(res.data);
  }
}
