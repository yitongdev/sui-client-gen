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

export function isDepositEvent(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::lending_market::DepositEvent`;
}

export interface DepositEventFields {
  lendingMarketId: ToField<"address">;
  coinType: ToField<TypeName>;
  reserveId: ToField<"address">;
  obligationId: ToField<"address">;
  ctokenAmount: ToField<"u64">;
}

export type DepositEventReified = Reified<DepositEvent, DepositEventFields>;

/**
 * Move struct: `DepositEvent`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::lending_market`
 */
export class DepositEvent implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::lending_market::DepositEvent`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = DepositEvent.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::lending_market::DepositEvent`;
  readonly $typeArgs: [];
  readonly $isPhantom = DepositEvent.$isPhantom;

  readonly lendingMarketId: ToField<"address">;
  readonly coinType: ToField<TypeName>;
  readonly reserveId: ToField<"address">;
  readonly obligationId: ToField<"address">;
  readonly ctokenAmount: ToField<"u64">;

  private constructor(typeArgs: [], fields: DepositEventFields) {
    this.$fullTypeName = composeSuiType(
      DepositEvent.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::lending_market::DepositEvent`;
    this.$typeArgs = typeArgs;

    this.lendingMarketId = fields.lendingMarketId;
    this.coinType = fields.coinType;
    this.reserveId = fields.reserveId;
    this.obligationId = fields.obligationId;
    this.ctokenAmount = fields.ctokenAmount;
  }

  static reified(): DepositEventReified {
    return {
      typeName: DepositEvent.$typeName,
      fullTypeName: composeSuiType(
        DepositEvent.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::lending_market::DepositEvent`,
      typeArgs: [] as [],
      isPhantom: DepositEvent.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        DepositEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        DepositEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => DepositEvent.fromBcs(data),
      bcs: DepositEvent.bcs,
      fromJSONField: (field: any) => DepositEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => DepositEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        DepositEvent.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        DepositEvent.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        DepositEvent.fetch(client, id),
      new: (fields: DepositEventFields) => {
        return new DepositEvent([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return DepositEvent.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<DepositEvent>> {
    return phantom(DepositEvent.reified());
  }
  static get p() {
    return DepositEvent.phantom();
  }

  static get bcs() {
    return bcs.struct("DepositEvent", {
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
      ctoken_amount: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): DepositEvent {
    return DepositEvent.reified().new({
      lendingMarketId: decodeFromFields("address", fields.lending_market_id),
      coinType: decodeFromFields(TypeName.reified(), fields.coin_type),
      reserveId: decodeFromFields("address", fields.reserve_id),
      obligationId: decodeFromFields("address", fields.obligation_id),
      ctokenAmount: decodeFromFields("u64", fields.ctoken_amount),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): DepositEvent {
    if (!isDepositEvent(item.type)) {
      throw new Error("not a DepositEvent type");
    }

    return DepositEvent.reified().new({
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
      ctokenAmount: decodeFromFieldsWithTypes("u64", item.fields.ctoken_amount),
    });
  }

  static fromBcs(data: Uint8Array): DepositEvent {
    return DepositEvent.fromFields(DepositEvent.bcs.parse(data));
  }

  toJSONField() {
    return {
      lendingMarketId: this.lendingMarketId,
      coinType: this.coinType.toJSONField(),
      reserveId: this.reserveId,
      obligationId: this.obligationId,
      ctokenAmount: this.ctokenAmount.toString(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): DepositEvent {
    return DepositEvent.reified().new({
      lendingMarketId: decodeFromJSONField("address", field.lendingMarketId),
      coinType: decodeFromJSONField(TypeName.reified(), field.coinType),
      reserveId: decodeFromJSONField("address", field.reserveId),
      obligationId: decodeFromJSONField("address", field.obligationId),
      ctokenAmount: decodeFromJSONField("u64", field.ctokenAmount),
    });
  }

  static fromJSON(json: Record<string, any>): DepositEvent {
    if (json.$typeName !== DepositEvent.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return DepositEvent.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): DepositEvent {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isDepositEvent(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a DepositEvent object`,
      );
    }
    return DepositEvent.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): DepositEvent {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isDepositEvent(data.bcs.type)
      ) {
        throw new Error(`object at is not a DepositEvent object`);
      }

      return DepositEvent.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return DepositEvent.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<DepositEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching DepositEvent object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isDepositEvent(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a DepositEvent object`);
    }

    return DepositEvent.fromSuiObjectData(res.data);
  }
}
