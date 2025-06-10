import {
  PhantomReified,
  PhantomToTypeStr,
  PhantomTypeArgument,
  Reified,
  StructClass,
  ToField,
  ToPhantomTypeArgument,
  ToTypeStr,
  assertFieldsWithTypesArgsMatch,
  assertReifiedTypeArgsMatch,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  extractType,
  phantom,
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../_framework/util.js";
import { PKG_V31 } from "../../constants.js";
import { ID, UID } from "../../object/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isPurchaseCap(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V31}::kiosk::PurchaseCap` + "<");
}

export interface PurchaseCapFields<T extends PhantomTypeArgument> {
  id: ToField<UID>;
  kioskId: ToField<ID>;
  itemId: ToField<ID>;
  minPrice: ToField<"u64">;
}

export type PurchaseCapReified<T extends PhantomTypeArgument> = Reified<
  PurchaseCap<T>,
  PurchaseCapFields<T>
>;

/**
 * Move struct: `PurchaseCap`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 *
 * @typeParam T - Type parameter 0 (phantom)
 */
export class PurchaseCap<T extends PhantomTypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::kiosk::PurchaseCap`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = PurchaseCap.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::kiosk::PurchaseCap<${PhantomToTypeStr<T>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T>];
  readonly $isPhantom = PurchaseCap.$isPhantom;

  readonly id: ToField<UID>;
  readonly kioskId: ToField<ID>;
  readonly itemId: ToField<ID>;
  readonly minPrice: ToField<"u64">;

  private constructor(
    typeArgs: [PhantomToTypeStr<T>],
    fields: PurchaseCapFields<T>,
  ) {
    this.$fullTypeName = composeSuiType(
      PurchaseCap.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::kiosk::PurchaseCap<${PhantomToTypeStr<T>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.kioskId = fields.kioskId;
    this.itemId = fields.itemId;
    this.minPrice = fields.minPrice;
  }

  static reified<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): PurchaseCapReified<ToPhantomTypeArgument<T>> {
    return {
      typeName: PurchaseCap.$typeName,
      fullTypeName: composeSuiType(
        PurchaseCap.$typeName,
        ...[extractType(T)],
      ) as `${typeof PKG_V31}::kiosk::PurchaseCap<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`,
      typeArgs: [extractType(T)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T>>,
      ],
      isPhantom: PurchaseCap.$isPhantom,
      reifiedTypeArgs: [T],
      fromFields: (fields: Record<string, any>) =>
        PurchaseCap.fromFields(T, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        PurchaseCap.fromFieldsWithTypes(T, item),
      fromBcs: (data: Uint8Array) => PurchaseCap.fromBcs(T, data),
      bcs: PurchaseCap.bcs,
      fromJSONField: (field: any) => PurchaseCap.fromJSONField(T, field),
      fromJSON: (json: Record<string, any>) => PurchaseCap.fromJSON(T, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        PurchaseCap.fromSuiParsedData(T, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        PurchaseCap.fromSuiObjectData(T, content),
      fetch: async (client: SuiClient, id: string) =>
        PurchaseCap.fetch(client, T, id),
      new: (fields: PurchaseCapFields<ToPhantomTypeArgument<T>>) => {
        return new PurchaseCap([extractType(T)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return PurchaseCap.reified;
  }

  static phantom<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): PhantomReified<ToTypeStr<PurchaseCap<ToPhantomTypeArgument<T>>>> {
    return phantom(PurchaseCap.reified(T));
  }
  static get p() {
    return PurchaseCap.phantom;
  }

  static get bcs() {
    return bcs.struct("PurchaseCap", {
      id: UID.bcs,
      kiosk_id: ID.bcs,
      item_id: ID.bcs,
      min_price: bcs.u64(),
    });
  }

  static fromFields<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    fields: Record<string, any>,
  ): PurchaseCap<ToPhantomTypeArgument<T>> {
    return PurchaseCap.reified(typeArg).new({
      id: decodeFromFields(UID.reified(), fields.id),
      kioskId: decodeFromFields(ID.reified(), fields.kiosk_id),
      itemId: decodeFromFields(ID.reified(), fields.item_id),
      minPrice: decodeFromFields("u64", fields.min_price),
    });
  }

  static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    item: FieldsWithTypes,
  ): PurchaseCap<ToPhantomTypeArgument<T>> {
    if (!isPurchaseCap(item.type)) {
      throw new Error("not a PurchaseCap type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return PurchaseCap.reified(typeArg).new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      kioskId: decodeFromFieldsWithTypes(ID.reified(), item.fields.kiosk_id),
      itemId: decodeFromFieldsWithTypes(ID.reified(), item.fields.item_id),
      minPrice: decodeFromFieldsWithTypes("u64", item.fields.min_price),
    });
  }

  static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: Uint8Array,
  ): PurchaseCap<ToPhantomTypeArgument<T>> {
    return PurchaseCap.fromFields(typeArg, PurchaseCap.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
      kioskId: this.kioskId,
      itemId: this.itemId,
      minPrice: this.minPrice.toString(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    field: any,
  ): PurchaseCap<ToPhantomTypeArgument<T>> {
    return PurchaseCap.reified(typeArg).new({
      id: decodeFromJSONField(UID.reified(), field.id),
      kioskId: decodeFromJSONField(ID.reified(), field.kioskId),
      itemId: decodeFromJSONField(ID.reified(), field.itemId),
      minPrice: decodeFromJSONField("u64", field.minPrice),
    });
  }

  static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    json: Record<string, any>,
  ): PurchaseCap<ToPhantomTypeArgument<T>> {
    if (json.$typeName !== PurchaseCap.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(PurchaseCap.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return PurchaseCap.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    content: SuiParsedData,
  ): PurchaseCap<ToPhantomTypeArgument<T>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isPurchaseCap(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a PurchaseCap object`,
      );
    }
    return PurchaseCap.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: SuiObjectData,
  ): PurchaseCap<ToPhantomTypeArgument<T>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isPurchaseCap(data.bcs.type)) {
        throw new Error(`object at is not a PurchaseCap object`);
      }

      const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
      if (gotTypeArgs.length !== 1) {
        throw new Error(
          `type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`,
        );
      }
      const gotTypeArg = compressSuiType(gotTypeArgs[0]);
      const expectedTypeArg = compressSuiType(extractType(typeArg));
      if (gotTypeArg !== compressSuiType(extractType(typeArg))) {
        throw new Error(
          `type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`,
        );
      }

      return PurchaseCap.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return PurchaseCap.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T,
    id: string,
  ): Promise<PurchaseCap<ToPhantomTypeArgument<T>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching PurchaseCap object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isPurchaseCap(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a PurchaseCap object`);
    }

    return PurchaseCap.fromSuiObjectData(typeArg, res.data);
  }
}
