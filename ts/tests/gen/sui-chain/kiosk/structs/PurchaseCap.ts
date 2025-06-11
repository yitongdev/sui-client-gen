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

export interface PurchaseCapFields<T0 extends PhantomTypeArgument> {
  id: ToField<UID>;
  kioskId: ToField<ID>;
  itemId: ToField<ID>;
  minPrice: ToField<"u64">;
}

export type PurchaseCapReified<T0 extends PhantomTypeArgument> = Reified<
  PurchaseCap<T0>,
  PurchaseCapFields<T0>
>;

/**
 * Move struct: `PurchaseCap`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 *
 * @typeParam T0 - Type parameter 0 (phantom)
 */
export class PurchaseCap<T0 extends PhantomTypeArgument>
  implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::kiosk::PurchaseCap`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = PurchaseCap.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::kiosk::PurchaseCap<${PhantomToTypeStr<T0>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T0>];
  readonly $isPhantom = PurchaseCap.$isPhantom;

  readonly id: ToField<UID>;
  readonly kioskId: ToField<ID>;
  readonly itemId: ToField<ID>;
  readonly minPrice: ToField<"u64">;

  private constructor(
    typeArgs: [PhantomToTypeStr<T0>],
    fields: PurchaseCapFields<T0>,
  ) {
    this.$fullTypeName = composeSuiType(
      PurchaseCap.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::kiosk::PurchaseCap<${PhantomToTypeStr<T0>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.kioskId = fields.kioskId;
    this.itemId = fields.itemId;
    this.minPrice = fields.minPrice;
  }

  static reified<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): PurchaseCapReified<ToPhantomTypeArgument<T0>> {
    return {
      typeName: PurchaseCap.$typeName,
      fullTypeName: composeSuiType(
        PurchaseCap.$typeName,
        ...[extractType(T0)],
      ) as `${typeof PKG_V31}::kiosk::PurchaseCap<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`,
      typeArgs: [extractType(T0)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T0>>,
      ],
      isPhantom: PurchaseCap.$isPhantom,
      reifiedTypeArgs: [T0],
      fromFields: (fields: Record<string, any>) =>
        PurchaseCap.fromFields(T0, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        PurchaseCap.fromFieldsWithTypes(T0, item),
      fromBcs: (data: Uint8Array) => PurchaseCap.fromBcs(T0, data),
      bcs: PurchaseCap.bcs,
      fromJSONField: (field: any) => PurchaseCap.fromJSONField(T0, field),
      fromJSON: (json: Record<string, any>) => PurchaseCap.fromJSON(T0, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        PurchaseCap.fromSuiParsedData(T0, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        PurchaseCap.fromSuiObjectData(T0, content),
      fetch: async (client: SuiClient, id: string) =>
        PurchaseCap.fetch(client, T0, id),
      new: (fields: PurchaseCapFields<ToPhantomTypeArgument<T0>>) => {
        return new PurchaseCap([extractType(T0)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return PurchaseCap.reified;
  }

  static phantom<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): PhantomReified<ToTypeStr<PurchaseCap<ToPhantomTypeArgument<T0>>>> {
    return phantom(PurchaseCap.reified(T0));
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

  static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    fields: Record<string, any>,
  ): PurchaseCap<ToPhantomTypeArgument<T0>> {
    return PurchaseCap.reified(typeArg).new({
      id: decodeFromFields(UID.reified(), fields.id),
      kioskId: decodeFromFields(ID.reified(), fields.kiosk_id),
      itemId: decodeFromFields(ID.reified(), fields.item_id),
      minPrice: decodeFromFields("u64", fields.min_price),
    });
  }

  static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    item: FieldsWithTypes,
  ): PurchaseCap<ToPhantomTypeArgument<T0>> {
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

  static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: Uint8Array,
  ): PurchaseCap<ToPhantomTypeArgument<T0>> {
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

  static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    field: any,
  ): PurchaseCap<ToPhantomTypeArgument<T0>> {
    return PurchaseCap.reified(typeArg).new({
      id: decodeFromJSONField(UID.reified(), field.id),
      kioskId: decodeFromJSONField(ID.reified(), field.kioskId),
      itemId: decodeFromJSONField(ID.reified(), field.itemId),
      minPrice: decodeFromJSONField("u64", field.minPrice),
    });
  }

  static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    json: Record<string, any>,
  ): PurchaseCap<ToPhantomTypeArgument<T0>> {
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

  static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    content: SuiParsedData,
  ): PurchaseCap<ToPhantomTypeArgument<T0>> {
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

  static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: SuiObjectData,
  ): PurchaseCap<ToPhantomTypeArgument<T0>> {
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

  static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T0,
    id: string,
  ): Promise<PurchaseCap<ToPhantomTypeArgument<T0>>> {
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
