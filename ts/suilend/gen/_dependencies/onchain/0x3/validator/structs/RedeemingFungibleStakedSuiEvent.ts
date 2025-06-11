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
import { ID } from "../../../0x2/object/structs/index.js";
import { PKG_V21 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isRedeemingFungibleStakedSuiEvent(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V21}::validator::RedeemingFungibleStakedSuiEvent`;
}

export interface RedeemingFungibleStakedSuiEventFields {
  poolId: ToField<ID>;
  fungibleStakedSuiAmount: ToField<"u64">;
  suiAmount: ToField<"u64">;
}

export type RedeemingFungibleStakedSuiEventReified = Reified<
  RedeemingFungibleStakedSuiEvent,
  RedeemingFungibleStakedSuiEventFields
>;

/**
 * Move struct: `RedeemingFungibleStakedSuiEvent`
 * Module: `0000000000000000000000000000000000000000000000000000000000000003::validator`
 */
export class RedeemingFungibleStakedSuiEvent implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V21}::validator::RedeemingFungibleStakedSuiEvent`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = RedeemingFungibleStakedSuiEvent.$typeName;
  readonly $fullTypeName: `${typeof PKG_V21}::validator::RedeemingFungibleStakedSuiEvent`;
  readonly $typeArgs: [];
  readonly $isPhantom = RedeemingFungibleStakedSuiEvent.$isPhantom;

  readonly poolId: ToField<ID>;
  readonly fungibleStakedSuiAmount: ToField<"u64">;
  readonly suiAmount: ToField<"u64">;

  private constructor(
    typeArgs: [],
    fields: RedeemingFungibleStakedSuiEventFields,
  ) {
    this.$fullTypeName = composeSuiType(
      RedeemingFungibleStakedSuiEvent.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V21}::validator::RedeemingFungibleStakedSuiEvent`;
    this.$typeArgs = typeArgs;

    this.poolId = fields.poolId;
    this.fungibleStakedSuiAmount = fields.fungibleStakedSuiAmount;
    this.suiAmount = fields.suiAmount;
  }

  static reified(): RedeemingFungibleStakedSuiEventReified {
    return {
      typeName: RedeemingFungibleStakedSuiEvent.$typeName,
      fullTypeName: composeSuiType(
        RedeemingFungibleStakedSuiEvent.$typeName,
        ...[],
      ) as `${typeof PKG_V21}::validator::RedeemingFungibleStakedSuiEvent`,
      typeArgs: [] as [],
      isPhantom: RedeemingFungibleStakedSuiEvent.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        RedeemingFungibleStakedSuiEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        RedeemingFungibleStakedSuiEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) =>
        RedeemingFungibleStakedSuiEvent.fromBcs(data),
      bcs: RedeemingFungibleStakedSuiEvent.bcs,
      fromJSONField: (field: any) =>
        RedeemingFungibleStakedSuiEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) =>
        RedeemingFungibleStakedSuiEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        RedeemingFungibleStakedSuiEvent.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        RedeemingFungibleStakedSuiEvent.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        RedeemingFungibleStakedSuiEvent.fetch(client, id),
      new: (fields: RedeemingFungibleStakedSuiEventFields) => {
        return new RedeemingFungibleStakedSuiEvent([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return RedeemingFungibleStakedSuiEvent.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<RedeemingFungibleStakedSuiEvent>> {
    return phantom(RedeemingFungibleStakedSuiEvent.reified());
  }
  static get p() {
    return RedeemingFungibleStakedSuiEvent.phantom();
  }

  static get bcs() {
    return bcs.struct("RedeemingFungibleStakedSuiEvent", {
      pool_id: ID.bcs,
      fungible_staked_sui_amount: bcs.u64(),
      sui_amount: bcs.u64(),
    });
  }

  static fromFields(
    fields: Record<string, any>,
  ): RedeemingFungibleStakedSuiEvent {
    return RedeemingFungibleStakedSuiEvent.reified().new({
      poolId: decodeFromFields(ID.reified(), fields.pool_id),
      fungibleStakedSuiAmount: decodeFromFields(
        "u64",
        fields.fungible_staked_sui_amount,
      ),
      suiAmount: decodeFromFields("u64", fields.sui_amount),
    });
  }

  static fromFieldsWithTypes(
    item: FieldsWithTypes,
  ): RedeemingFungibleStakedSuiEvent {
    if (!isRedeemingFungibleStakedSuiEvent(item.type)) {
      throw new Error("not a RedeemingFungibleStakedSuiEvent type");
    }

    return RedeemingFungibleStakedSuiEvent.reified().new({
      poolId: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool_id),
      fungibleStakedSuiAmount: decodeFromFieldsWithTypes(
        "u64",
        item.fields.fungible_staked_sui_amount,
      ),
      suiAmount: decodeFromFieldsWithTypes("u64", item.fields.sui_amount),
    });
  }

  static fromBcs(data: Uint8Array): RedeemingFungibleStakedSuiEvent {
    return RedeemingFungibleStakedSuiEvent.fromFields(
      RedeemingFungibleStakedSuiEvent.bcs.parse(data),
    );
  }

  toJSONField() {
    return {
      poolId: this.poolId,
      fungibleStakedSuiAmount: this.fungibleStakedSuiAmount.toString(),
      suiAmount: this.suiAmount.toString(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): RedeemingFungibleStakedSuiEvent {
    return RedeemingFungibleStakedSuiEvent.reified().new({
      poolId: decodeFromJSONField(ID.reified(), field.poolId),
      fungibleStakedSuiAmount: decodeFromJSONField(
        "u64",
        field.fungibleStakedSuiAmount,
      ),
      suiAmount: decodeFromJSONField("u64", field.suiAmount),
    });
  }

  static fromJSON(json: Record<string, any>): RedeemingFungibleStakedSuiEvent {
    if (json.$typeName !== RedeemingFungibleStakedSuiEvent.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return RedeemingFungibleStakedSuiEvent.fromJSONField(json);
  }

  static fromSuiParsedData(
    content: SuiParsedData,
  ): RedeemingFungibleStakedSuiEvent {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isRedeemingFungibleStakedSuiEvent(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a RedeemingFungibleStakedSuiEvent object`,
      );
    }
    return RedeemingFungibleStakedSuiEvent.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(
    data: SuiObjectData,
  ): RedeemingFungibleStakedSuiEvent {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isRedeemingFungibleStakedSuiEvent(data.bcs.type)
      ) {
        throw new Error(
          `object at is not a RedeemingFungibleStakedSuiEvent object`,
        );
      }

      return RedeemingFungibleStakedSuiEvent.fromBcs(
        fromBase64(data.bcs.bcsBytes),
      );
    }
    if (data.content) {
      return RedeemingFungibleStakedSuiEvent.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(
    client: SuiClient,
    id: string,
  ): Promise<RedeemingFungibleStakedSuiEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching RedeemingFungibleStakedSuiEvent object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isRedeemingFungibleStakedSuiEvent(res.data.bcs.type)
    ) {
      throw new Error(
        `object at id ${id} is not a RedeemingFungibleStakedSuiEvent object`,
      );
    }

    return RedeemingFungibleStakedSuiEvent.fromSuiObjectData(res.data);
  }
}
