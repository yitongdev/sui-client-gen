import { TypeName } from "../../../_dependencies/onchain/0x1/type-name/structs/index.js";
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
import { PKG_V1 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64, fromHex, toHex } from "@mysten/sui/utils";

export function isBorrowEvent(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::lending_market::BorrowEvent`;
}

export interface BorrowEventFields {
  lendingMarketId: ToField<"address">;
  coinType: ToField<TypeName>;
  reserveId: ToField<"address">;
  obligationId: ToField<"address">;
  liquidityAmount: ToField<"u64">;
  originationFeeAmount: ToField<"u64">;
}

export type BorrowEventReified = Reified<BorrowEvent, BorrowEventFields>;

/**
 * Move struct: `BorrowEvent`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::lending_market`
 */
export class BorrowEvent implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::lending_market::BorrowEvent`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = BorrowEvent.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::lending_market::BorrowEvent`;
  readonly $typeArgs: [];
  readonly $isPhantom = BorrowEvent.$isPhantom;

  readonly lendingMarketId: ToField<"address">;
  readonly coinType: ToField<TypeName>;
  readonly reserveId: ToField<"address">;
  readonly obligationId: ToField<"address">;
  readonly liquidityAmount: ToField<"u64">;
  readonly originationFeeAmount: ToField<"u64">;

  private constructor(typeArgs: [], fields: BorrowEventFields) {
    this.$fullTypeName = composeSuiType(
      BorrowEvent.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::lending_market::BorrowEvent`;
    this.$typeArgs = typeArgs;

    this.lendingMarketId = fields.lendingMarketId;
    this.coinType = fields.coinType;
    this.reserveId = fields.reserveId;
    this.obligationId = fields.obligationId;
    this.liquidityAmount = fields.liquidityAmount;
    this.originationFeeAmount = fields.originationFeeAmount;
  }

  static reified(): BorrowEventReified {
    return {
      typeName: BorrowEvent.$typeName,
      fullTypeName: composeSuiType(
        BorrowEvent.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::lending_market::BorrowEvent`,
      typeArgs: [] as [],
      isPhantom: BorrowEvent.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        BorrowEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        BorrowEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => BorrowEvent.fromBcs(data),
      bcs: BorrowEvent.bcs,
      fromJSONField: (field: any) => BorrowEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => BorrowEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        BorrowEvent.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        BorrowEvent.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        BorrowEvent.fetch(client, id),
      new: (fields: BorrowEventFields) => {
        return new BorrowEvent([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return BorrowEvent.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<BorrowEvent>> {
    return phantom(BorrowEvent.reified());
  }
  static get p() {
    return BorrowEvent.phantom();
  }

  static get bcs() {
    return bcs.struct("BorrowEvent", {
      lending_market_id: bcs.bytes(32).transform({
        input: (val: string) => fromHex(val),
        output: (val: Uint8Array) => toHex(val),
      }),
      coin_type: TypeName.bcs,
      reserve_id: bcs.bytes(32).transform({
        input: (val: string) => fromHex(val),
        output: (val: Uint8Array) => toHex(val),
      }),
      obligation_id: bcs.bytes(32).transform({
        input: (val: string) => fromHex(val),
        output: (val: Uint8Array) => toHex(val),
      }),
      liquidity_amount: bcs.u64(),
      origination_fee_amount: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): BorrowEvent {
    return BorrowEvent.reified().new({
      lendingMarketId: decodeFromFields("address", fields.lending_market_id),
      coinType: decodeFromFields(TypeName.reified(), fields.coin_type),
      reserveId: decodeFromFields("address", fields.reserve_id),
      obligationId: decodeFromFields("address", fields.obligation_id),
      liquidityAmount: decodeFromFields("u64", fields.liquidity_amount),
      originationFeeAmount: decodeFromFields(
        "u64",
        fields.origination_fee_amount,
      ),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): BorrowEvent {
    if (!isBorrowEvent(item.type)) {
      throw new Error("not a BorrowEvent type");
    }

    return BorrowEvent.reified().new({
      lendingMarketId: decodeFromFieldsWithTypes(
        "address",
        item.fields.lending_market_id,
      ),
      coinType: decodeFromFieldsWithTypes(
        TypeName.reified(),
        item.fields.coin_type,
      ),
      reserveId: decodeFromFieldsWithTypes("address", item.fields.reserve_id),
      obligationId: decodeFromFieldsWithTypes(
        "address",
        item.fields.obligation_id,
      ),
      liquidityAmount: decodeFromFieldsWithTypes(
        "u64",
        item.fields.liquidity_amount,
      ),
      originationFeeAmount: decodeFromFieldsWithTypes(
        "u64",
        item.fields.origination_fee_amount,
      ),
    });
  }

  static fromBcs(data: Uint8Array): BorrowEvent {
    return BorrowEvent.fromFields(BorrowEvent.bcs.parse(data));
  }

  toJSONField() {
    return {
      lendingMarketId: this.lendingMarketId,
      coinType: this.coinType.toJSONField(),
      reserveId: this.reserveId,
      obligationId: this.obligationId,
      liquidityAmount: this.liquidityAmount.toString(),
      originationFeeAmount: this.originationFeeAmount.toString(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): BorrowEvent {
    return BorrowEvent.reified().new({
      lendingMarketId: decodeFromJSONField("address", field.lendingMarketId),
      coinType: decodeFromJSONField(TypeName.reified(), field.coinType),
      reserveId: decodeFromJSONField("address", field.reserveId),
      obligationId: decodeFromJSONField("address", field.obligationId),
      liquidityAmount: decodeFromJSONField("u64", field.liquidityAmount),
      originationFeeAmount: decodeFromJSONField(
        "u64",
        field.originationFeeAmount,
      ),
    });
  }

  static fromJSON(json: Record<string, any>): BorrowEvent {
    if (json.$typeName !== BorrowEvent.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return BorrowEvent.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): BorrowEvent {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isBorrowEvent(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a BorrowEvent object`,
      );
    }
    return BorrowEvent.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): BorrowEvent {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isBorrowEvent(data.bcs.type)) {
        throw new Error(`object at is not a BorrowEvent object`);
      }

      return BorrowEvent.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return BorrowEvent.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<BorrowEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching BorrowEvent object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isBorrowEvent(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a BorrowEvent object`);
    }

    return BorrowEvent.fromSuiObjectData(res.data);
  }
}
