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
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isBorrow(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V31}::kiosk::Borrow`;
}

export interface BorrowFields {
  kioskId: ToField<ID>;
  itemId: ToField<ID>;
}

export type BorrowReified = Reified<Borrow, BorrowFields>;

/**
 * Move struct: `Borrow`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 */
export class Borrow implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::kiosk::Borrow`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = Borrow.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::kiosk::Borrow`;
  readonly $typeArgs: [];
  readonly $isPhantom = Borrow.$isPhantom;

  readonly kioskId: ToField<ID>;
  readonly itemId: ToField<ID>;

  private constructor(typeArgs: [], fields: BorrowFields) {
    this.$fullTypeName = composeSuiType(
      Borrow.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::kiosk::Borrow`;
    this.$typeArgs = typeArgs;

    this.kioskId = fields.kioskId;
    this.itemId = fields.itemId;
  }

  static reified(): BorrowReified {
    return {
      typeName: Borrow.$typeName,
      fullTypeName: composeSuiType(
        Borrow.$typeName,
        ...[],
      ) as `${typeof PKG_V31}::kiosk::Borrow`,
      typeArgs: [] as [],
      isPhantom: Borrow.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => Borrow.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        Borrow.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => Borrow.fromBcs(data),
      bcs: Borrow.bcs,
      fromJSONField: (field: any) => Borrow.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => Borrow.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        Borrow.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        Borrow.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => Borrow.fetch(client, id),
      new: (fields: BorrowFields) => {
        return new Borrow([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Borrow.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<Borrow>> {
    return phantom(Borrow.reified());
  }
  static get p() {
    return Borrow.phantom();
  }

  static get bcs() {
    return bcs.struct("Borrow", {
      kiosk_id: ID.bcs,
      item_id: ID.bcs,
    });
  }

  static fromFields(fields: Record<string, any>): Borrow {
    return Borrow.reified().new({
      kioskId: decodeFromFields(ID.reified(), fields.kiosk_id),
      itemId: decodeFromFields(ID.reified(), fields.item_id),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): Borrow {
    if (!isBorrow(item.type)) {
      throw new Error("not a Borrow type");
    }

    return Borrow.reified().new({
      kioskId: decodeFromFieldsWithTypes(ID.reified(), item.fields.kiosk_id),
      itemId: decodeFromFieldsWithTypes(ID.reified(), item.fields.item_id),
    });
  }

  static fromBcs(data: Uint8Array): Borrow {
    return Borrow.fromFields(Borrow.bcs.parse(data));
  }

  toJSONField() {
    return {
      kioskId: this.kioskId,
      itemId: this.itemId,
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): Borrow {
    return Borrow.reified().new({
      kioskId: decodeFromJSONField(ID.reified(), field.kioskId),
      itemId: decodeFromJSONField(ID.reified(), field.itemId),
    });
  }

  static fromJSON(json: Record<string, any>): Borrow {
    if (json.$typeName !== Borrow.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return Borrow.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): Borrow {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isBorrow(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a Borrow object`,
      );
    }
    return Borrow.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): Borrow {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isBorrow(data.bcs.type)) {
        throw new Error(`object at is not a Borrow object`);
      }

      return Borrow.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Borrow.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<Borrow> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching Borrow object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isBorrow(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a Borrow object`);
    }

    return Borrow.fromSuiObjectData(res.data);
  }
}
