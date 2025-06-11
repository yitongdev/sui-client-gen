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
  phantom,
  ToTypeStr as ToPhantom,
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../_framework/util.js";
import { Balance } from "../../balance/structs/index.js";
import { PKG_V31 } from "../../constants.js";
import { UID } from "../../object/structs/index.js";
import { SUI } from "../../sui/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64, fromHex, toHex } from "@mysten/sui/utils";

export function isKiosk(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V31}::kiosk::Kiosk`;
}

export interface KioskFields {
  id: ToField<UID>;
  profits: ToField<Balance<ToPhantom<SUI>>>;
  owner: ToField<"address">;
  itemCount: ToField<"u32">;
  allowExtensions: ToField<"bool">;
}

export type KioskReified = Reified<Kiosk, KioskFields>;

/**
 * Move struct: `Kiosk`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 */
export class Kiosk implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::kiosk::Kiosk`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = Kiosk.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::kiosk::Kiosk`;
  readonly $typeArgs: [];
  readonly $isPhantom = Kiosk.$isPhantom;

  readonly id: ToField<UID>;
  readonly profits: ToField<Balance<ToPhantom<SUI>>>;
  readonly owner: ToField<"address">;
  readonly itemCount: ToField<"u32">;
  readonly allowExtensions: ToField<"bool">;

  private constructor(typeArgs: [], fields: KioskFields) {
    this.$fullTypeName = composeSuiType(
      Kiosk.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::kiosk::Kiosk`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.profits = fields.profits;
    this.owner = fields.owner;
    this.itemCount = fields.itemCount;
    this.allowExtensions = fields.allowExtensions;
  }

  static reified(): KioskReified {
    return {
      typeName: Kiosk.$typeName,
      fullTypeName: composeSuiType(
        Kiosk.$typeName,
        ...[],
      ) as `${typeof PKG_V31}::kiosk::Kiosk`,
      typeArgs: [] as [],
      isPhantom: Kiosk.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => Kiosk.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        Kiosk.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => Kiosk.fromBcs(data),
      bcs: Kiosk.bcs,
      fromJSONField: (field: any) => Kiosk.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => Kiosk.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        Kiosk.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        Kiosk.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => Kiosk.fetch(client, id),
      new: (fields: KioskFields) => {
        return new Kiosk([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Kiosk.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<Kiosk>> {
    return phantom(Kiosk.reified());
  }
  static get p() {
    return Kiosk.phantom();
  }

  static get bcs() {
    return bcs.struct("Kiosk", {
      id: UID.bcs,
      profits: Balance.bcs,
      owner: bcs.bytes(32).transform({
        input: (val: string) => fromHex(val),
        output: (val: Uint8Array) => toHex(val),
      }),
      item_count: bcs.u32(),
      allow_extensions: bcs.bool(),
    });
  }

  static fromFields(fields: Record<string, any>): Kiosk {
    return Kiosk.reified().new({
      id: decodeFromFields(UID.reified(), fields.id),
      profits: decodeFromFields(
        Balance.reified(reified.phantom(SUI.reified())),
        fields.profits,
      ),
      owner: decodeFromFields("address", fields.owner),
      itemCount: decodeFromFields("u32", fields.item_count),
      allowExtensions: decodeFromFields("bool", fields.allow_extensions),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): Kiosk {
    if (!isKiosk(item.type)) {
      throw new Error("not a Kiosk type");
    }

    return Kiosk.reified().new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      profits: decodeFromFieldsWithTypes(
        Balance.reified(reified.phantom(SUI.reified())),
        item.fields.profits,
      ),
      owner: decodeFromFieldsWithTypes("address", item.fields.owner),
      itemCount: decodeFromFieldsWithTypes("u32", item.fields.item_count),
      allowExtensions: decodeFromFieldsWithTypes(
        "bool",
        item.fields.allow_extensions,
      ),
    });
  }

  static fromBcs(data: Uint8Array): Kiosk {
    return Kiosk.fromFields(Kiosk.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
      profits: this.profits.toJSONField(),
      owner: this.owner,
      itemCount: this.itemCount,
      allowExtensions: this.allowExtensions,
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): Kiosk {
    return Kiosk.reified().new({
      id: decodeFromJSONField(UID.reified(), field.id),
      profits: decodeFromJSONField(
        Balance.reified(reified.phantom(SUI.reified())),
        field.profits,
      ),
      owner: decodeFromJSONField("address", field.owner),
      itemCount: decodeFromJSONField("u32", field.itemCount),
      allowExtensions: decodeFromJSONField("bool", field.allowExtensions),
    });
  }

  static fromJSON(json: Record<string, any>): Kiosk {
    if (json.$typeName !== Kiosk.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return Kiosk.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): Kiosk {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isKiosk(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a Kiosk object`,
      );
    }
    return Kiosk.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): Kiosk {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isKiosk(data.bcs.type)) {
        throw new Error(`object at is not a Kiosk object`);
      }

      return Kiosk.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Kiosk.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<Kiosk> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching Kiosk object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isKiosk(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a Kiosk object`);
    }

    return Kiosk.fromSuiObjectData(res.data);
  }
}
