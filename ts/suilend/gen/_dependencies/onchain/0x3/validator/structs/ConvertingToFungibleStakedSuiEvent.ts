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

export function isConvertingToFungibleStakedSuiEvent(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V21}::validator::ConvertingToFungibleStakedSuiEvent`;
}

export interface ConvertingToFungibleStakedSuiEventFields {
  poolId: ToField<ID>;
  stakeActivationEpoch: ToField<"u64">;
  stakedSuiPrincipalAmount: ToField<"u64">;
  fungibleStakedSuiAmount: ToField<"u64">;
}

export type ConvertingToFungibleStakedSuiEventReified = Reified<
  ConvertingToFungibleStakedSuiEvent,
  ConvertingToFungibleStakedSuiEventFields
>;

/**
 * Move struct: `ConvertingToFungibleStakedSuiEvent`
 * Module: `0000000000000000000000000000000000000000000000000000000000000003::validator`
 */
export class ConvertingToFungibleStakedSuiEvent implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V21}::validator::ConvertingToFungibleStakedSuiEvent`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = ConvertingToFungibleStakedSuiEvent.$typeName;
  readonly $fullTypeName: `${typeof PKG_V21}::validator::ConvertingToFungibleStakedSuiEvent`;
  readonly $typeArgs: [];
  readonly $isPhantom = ConvertingToFungibleStakedSuiEvent.$isPhantom;

  readonly poolId: ToField<ID>;
  readonly stakeActivationEpoch: ToField<"u64">;
  readonly stakedSuiPrincipalAmount: ToField<"u64">;
  readonly fungibleStakedSuiAmount: ToField<"u64">;

  private constructor(
    typeArgs: [],
    fields: ConvertingToFungibleStakedSuiEventFields,
  ) {
    this.$fullTypeName = composeSuiType(
      ConvertingToFungibleStakedSuiEvent.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V21}::validator::ConvertingToFungibleStakedSuiEvent`;
    this.$typeArgs = typeArgs;

    this.poolId = fields.poolId;
    this.stakeActivationEpoch = fields.stakeActivationEpoch;
    this.stakedSuiPrincipalAmount = fields.stakedSuiPrincipalAmount;
    this.fungibleStakedSuiAmount = fields.fungibleStakedSuiAmount;
  }

  static reified(): ConvertingToFungibleStakedSuiEventReified {
    return {
      typeName: ConvertingToFungibleStakedSuiEvent.$typeName,
      fullTypeName: composeSuiType(
        ConvertingToFungibleStakedSuiEvent.$typeName,
        ...[],
      ) as `${typeof PKG_V21}::validator::ConvertingToFungibleStakedSuiEvent`,
      typeArgs: [] as [],
      isPhantom: ConvertingToFungibleStakedSuiEvent.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        ConvertingToFungibleStakedSuiEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        ConvertingToFungibleStakedSuiEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) =>
        ConvertingToFungibleStakedSuiEvent.fromBcs(data),
      bcs: ConvertingToFungibleStakedSuiEvent.bcs,
      fromJSONField: (field: any) =>
        ConvertingToFungibleStakedSuiEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) =>
        ConvertingToFungibleStakedSuiEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        ConvertingToFungibleStakedSuiEvent.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        ConvertingToFungibleStakedSuiEvent.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        ConvertingToFungibleStakedSuiEvent.fetch(client, id),
      new: (fields: ConvertingToFungibleStakedSuiEventFields) => {
        return new ConvertingToFungibleStakedSuiEvent([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return ConvertingToFungibleStakedSuiEvent.reified();
  }

  static phantom(): PhantomReified<
    ToTypeStr<ConvertingToFungibleStakedSuiEvent>
  > {
    return phantom(ConvertingToFungibleStakedSuiEvent.reified());
  }
  static get p() {
    return ConvertingToFungibleStakedSuiEvent.phantom();
  }

  static get bcs() {
    return bcs.struct("ConvertingToFungibleStakedSuiEvent", {
      pool_id: ID.bcs,
      stake_activation_epoch: bcs.u64(),
      staked_sui_principal_amount: bcs.u64(),
      fungible_staked_sui_amount: bcs.u64(),
    });
  }

  static fromFields(
    fields: Record<string, any>,
  ): ConvertingToFungibleStakedSuiEvent {
    return ConvertingToFungibleStakedSuiEvent.reified().new({
      poolId: decodeFromFields(ID.reified(), fields.pool_id),
      stakeActivationEpoch: decodeFromFields(
        "u64",
        fields.stake_activation_epoch,
      ),
      stakedSuiPrincipalAmount: decodeFromFields(
        "u64",
        fields.staked_sui_principal_amount,
      ),
      fungibleStakedSuiAmount: decodeFromFields(
        "u64",
        fields.fungible_staked_sui_amount,
      ),
    });
  }

  static fromFieldsWithTypes(
    item: FieldsWithTypes,
  ): ConvertingToFungibleStakedSuiEvent {
    if (!isConvertingToFungibleStakedSuiEvent(item.type)) {
      throw new Error("not a ConvertingToFungibleStakedSuiEvent type");
    }

    return ConvertingToFungibleStakedSuiEvent.reified().new({
      poolId: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool_id),
      stakeActivationEpoch: decodeFromFieldsWithTypes(
        "u64",
        item.fields.stake_activation_epoch,
      ),
      stakedSuiPrincipalAmount: decodeFromFieldsWithTypes(
        "u64",
        item.fields.staked_sui_principal_amount,
      ),
      fungibleStakedSuiAmount: decodeFromFieldsWithTypes(
        "u64",
        item.fields.fungible_staked_sui_amount,
      ),
    });
  }

  static fromBcs(data: Uint8Array): ConvertingToFungibleStakedSuiEvent {
    return ConvertingToFungibleStakedSuiEvent.fromFields(
      ConvertingToFungibleStakedSuiEvent.bcs.parse(data),
    );
  }

  toJSONField() {
    return {
      poolId: this.poolId,
      stakeActivationEpoch: this.stakeActivationEpoch.toString(),
      stakedSuiPrincipalAmount: this.stakedSuiPrincipalAmount.toString(),
      fungibleStakedSuiAmount: this.fungibleStakedSuiAmount.toString(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): ConvertingToFungibleStakedSuiEvent {
    return ConvertingToFungibleStakedSuiEvent.reified().new({
      poolId: decodeFromJSONField(ID.reified(), field.poolId),
      stakeActivationEpoch: decodeFromJSONField(
        "u64",
        field.stakeActivationEpoch,
      ),
      stakedSuiPrincipalAmount: decodeFromJSONField(
        "u64",
        field.stakedSuiPrincipalAmount,
      ),
      fungibleStakedSuiAmount: decodeFromJSONField(
        "u64",
        field.fungibleStakedSuiAmount,
      ),
    });
  }

  static fromJSON(
    json: Record<string, any>,
  ): ConvertingToFungibleStakedSuiEvent {
    if (json.$typeName !== ConvertingToFungibleStakedSuiEvent.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return ConvertingToFungibleStakedSuiEvent.fromJSONField(json);
  }

  static fromSuiParsedData(
    content: SuiParsedData,
  ): ConvertingToFungibleStakedSuiEvent {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isConvertingToFungibleStakedSuiEvent(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a ConvertingToFungibleStakedSuiEvent object`,
      );
    }
    return ConvertingToFungibleStakedSuiEvent.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(
    data: SuiObjectData,
  ): ConvertingToFungibleStakedSuiEvent {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isConvertingToFungibleStakedSuiEvent(data.bcs.type)
      ) {
        throw new Error(
          `object at is not a ConvertingToFungibleStakedSuiEvent object`,
        );
      }

      return ConvertingToFungibleStakedSuiEvent.fromBcs(
        fromBase64(data.bcs.bcsBytes),
      );
    }
    if (data.content) {
      return ConvertingToFungibleStakedSuiEvent.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(
    client: SuiClient,
    id: string,
  ): Promise<ConvertingToFungibleStakedSuiEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching ConvertingToFungibleStakedSuiEvent object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isConvertingToFungibleStakedSuiEvent(res.data.bcs.type)
    ) {
      throw new Error(
        `object at id ${id} is not a ConvertingToFungibleStakedSuiEvent object`,
      );
    }

    return ConvertingToFungibleStakedSuiEvent.fromSuiObjectData(res.data);
  }
}
