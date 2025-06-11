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
import { PKG_V21 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isSystemEpochInfoEvent(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V21}::sui_system_state_inner::SystemEpochInfoEvent`;
}

export interface SystemEpochInfoEventFields {
  epoch: ToField<"u64">;
  protocolVersion: ToField<"u64">;
  referenceGasPrice: ToField<"u64">;
  totalStake: ToField<"u64">;
  storageFundReinvestment: ToField<"u64">;
  storageCharge: ToField<"u64">;
  storageRebate: ToField<"u64">;
  storageFundBalance: ToField<"u64">;
  stakeSubsidyAmount: ToField<"u64">;
  totalGasFees: ToField<"u64">;
  totalStakeRewardsDistributed: ToField<"u64">;
  leftoverStorageFundInflow: ToField<"u64">;
}

export type SystemEpochInfoEventReified = Reified<
  SystemEpochInfoEvent,
  SystemEpochInfoEventFields
>;

/**
 * Move struct: `SystemEpochInfoEvent`
 * Module: `0000000000000000000000000000000000000000000000000000000000000003::sui_system_state_inner`
 */
export class SystemEpochInfoEvent implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V21}::sui_system_state_inner::SystemEpochInfoEvent`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = SystemEpochInfoEvent.$typeName;
  readonly $fullTypeName: `${typeof PKG_V21}::sui_system_state_inner::SystemEpochInfoEvent`;
  readonly $typeArgs: [];
  readonly $isPhantom = SystemEpochInfoEvent.$isPhantom;

  readonly epoch: ToField<"u64">;
  readonly protocolVersion: ToField<"u64">;
  readonly referenceGasPrice: ToField<"u64">;
  readonly totalStake: ToField<"u64">;
  readonly storageFundReinvestment: ToField<"u64">;
  readonly storageCharge: ToField<"u64">;
  readonly storageRebate: ToField<"u64">;
  readonly storageFundBalance: ToField<"u64">;
  readonly stakeSubsidyAmount: ToField<"u64">;
  readonly totalGasFees: ToField<"u64">;
  readonly totalStakeRewardsDistributed: ToField<"u64">;
  readonly leftoverStorageFundInflow: ToField<"u64">;

  private constructor(typeArgs: [], fields: SystemEpochInfoEventFields) {
    this.$fullTypeName = composeSuiType(
      SystemEpochInfoEvent.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V21}::sui_system_state_inner::SystemEpochInfoEvent`;
    this.$typeArgs = typeArgs;

    this.epoch = fields.epoch;
    this.protocolVersion = fields.protocolVersion;
    this.referenceGasPrice = fields.referenceGasPrice;
    this.totalStake = fields.totalStake;
    this.storageFundReinvestment = fields.storageFundReinvestment;
    this.storageCharge = fields.storageCharge;
    this.storageRebate = fields.storageRebate;
    this.storageFundBalance = fields.storageFundBalance;
    this.stakeSubsidyAmount = fields.stakeSubsidyAmount;
    this.totalGasFees = fields.totalGasFees;
    this.totalStakeRewardsDistributed = fields.totalStakeRewardsDistributed;
    this.leftoverStorageFundInflow = fields.leftoverStorageFundInflow;
  }

  static reified(): SystemEpochInfoEventReified {
    return {
      typeName: SystemEpochInfoEvent.$typeName,
      fullTypeName: composeSuiType(
        SystemEpochInfoEvent.$typeName,
        ...[],
      ) as `${typeof PKG_V21}::sui_system_state_inner::SystemEpochInfoEvent`,
      typeArgs: [] as [],
      isPhantom: SystemEpochInfoEvent.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        SystemEpochInfoEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        SystemEpochInfoEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => SystemEpochInfoEvent.fromBcs(data),
      bcs: SystemEpochInfoEvent.bcs,
      fromJSONField: (field: any) => SystemEpochInfoEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) =>
        SystemEpochInfoEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        SystemEpochInfoEvent.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        SystemEpochInfoEvent.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        SystemEpochInfoEvent.fetch(client, id),
      new: (fields: SystemEpochInfoEventFields) => {
        return new SystemEpochInfoEvent([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return SystemEpochInfoEvent.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<SystemEpochInfoEvent>> {
    return phantom(SystemEpochInfoEvent.reified());
  }
  static get p() {
    return SystemEpochInfoEvent.phantom();
  }

  static get bcs() {
    return bcs.struct("SystemEpochInfoEvent", {
      epoch: bcs.u64(),
      protocol_version: bcs.u64(),
      reference_gas_price: bcs.u64(),
      total_stake: bcs.u64(),
      storage_fund_reinvestment: bcs.u64(),
      storage_charge: bcs.u64(),
      storage_rebate: bcs.u64(),
      storage_fund_balance: bcs.u64(),
      stake_subsidy_amount: bcs.u64(),
      total_gas_fees: bcs.u64(),
      total_stake_rewards_distributed: bcs.u64(),
      leftover_storage_fund_inflow: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): SystemEpochInfoEvent {
    return SystemEpochInfoEvent.reified().new({
      epoch: decodeFromFields("u64", fields.epoch),
      protocolVersion: decodeFromFields("u64", fields.protocol_version),
      referenceGasPrice: decodeFromFields("u64", fields.reference_gas_price),
      totalStake: decodeFromFields("u64", fields.total_stake),
      storageFundReinvestment: decodeFromFields(
        "u64",
        fields.storage_fund_reinvestment,
      ),
      storageCharge: decodeFromFields("u64", fields.storage_charge),
      storageRebate: decodeFromFields("u64", fields.storage_rebate),
      storageFundBalance: decodeFromFields("u64", fields.storage_fund_balance),
      stakeSubsidyAmount: decodeFromFields("u64", fields.stake_subsidy_amount),
      totalGasFees: decodeFromFields("u64", fields.total_gas_fees),
      totalStakeRewardsDistributed: decodeFromFields(
        "u64",
        fields.total_stake_rewards_distributed,
      ),
      leftoverStorageFundInflow: decodeFromFields(
        "u64",
        fields.leftover_storage_fund_inflow,
      ),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): SystemEpochInfoEvent {
    if (!isSystemEpochInfoEvent(item.type)) {
      throw new Error("not a SystemEpochInfoEvent type");
    }

    return SystemEpochInfoEvent.reified().new({
      epoch: decodeFromFieldsWithTypes("u64", item.fields.epoch),
      protocolVersion: decodeFromFieldsWithTypes(
        "u64",
        item.fields.protocol_version,
      ),
      referenceGasPrice: decodeFromFieldsWithTypes(
        "u64",
        item.fields.reference_gas_price,
      ),
      totalStake: decodeFromFieldsWithTypes("u64", item.fields.total_stake),
      storageFundReinvestment: decodeFromFieldsWithTypes(
        "u64",
        item.fields.storage_fund_reinvestment,
      ),
      storageCharge: decodeFromFieldsWithTypes(
        "u64",
        item.fields.storage_charge,
      ),
      storageRebate: decodeFromFieldsWithTypes(
        "u64",
        item.fields.storage_rebate,
      ),
      storageFundBalance: decodeFromFieldsWithTypes(
        "u64",
        item.fields.storage_fund_balance,
      ),
      stakeSubsidyAmount: decodeFromFieldsWithTypes(
        "u64",
        item.fields.stake_subsidy_amount,
      ),
      totalGasFees: decodeFromFieldsWithTypes(
        "u64",
        item.fields.total_gas_fees,
      ),
      totalStakeRewardsDistributed: decodeFromFieldsWithTypes(
        "u64",
        item.fields.total_stake_rewards_distributed,
      ),
      leftoverStorageFundInflow: decodeFromFieldsWithTypes(
        "u64",
        item.fields.leftover_storage_fund_inflow,
      ),
    });
  }

  static fromBcs(data: Uint8Array): SystemEpochInfoEvent {
    return SystemEpochInfoEvent.fromFields(
      SystemEpochInfoEvent.bcs.parse(data),
    );
  }

  toJSONField() {
    return {
      epoch: this.epoch.toString(),
      protocolVersion: this.protocolVersion.toString(),
      referenceGasPrice: this.referenceGasPrice.toString(),
      totalStake: this.totalStake.toString(),
      storageFundReinvestment: this.storageFundReinvestment.toString(),
      storageCharge: this.storageCharge.toString(),
      storageRebate: this.storageRebate.toString(),
      storageFundBalance: this.storageFundBalance.toString(),
      stakeSubsidyAmount: this.stakeSubsidyAmount.toString(),
      totalGasFees: this.totalGasFees.toString(),
      totalStakeRewardsDistributed:
        this.totalStakeRewardsDistributed.toString(),
      leftoverStorageFundInflow: this.leftoverStorageFundInflow.toString(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): SystemEpochInfoEvent {
    return SystemEpochInfoEvent.reified().new({
      epoch: decodeFromJSONField("u64", field.epoch),
      protocolVersion: decodeFromJSONField("u64", field.protocolVersion),
      referenceGasPrice: decodeFromJSONField("u64", field.referenceGasPrice),
      totalStake: decodeFromJSONField("u64", field.totalStake),
      storageFundReinvestment: decodeFromJSONField(
        "u64",
        field.storageFundReinvestment,
      ),
      storageCharge: decodeFromJSONField("u64", field.storageCharge),
      storageRebate: decodeFromJSONField("u64", field.storageRebate),
      storageFundBalance: decodeFromJSONField("u64", field.storageFundBalance),
      stakeSubsidyAmount: decodeFromJSONField("u64", field.stakeSubsidyAmount),
      totalGasFees: decodeFromJSONField("u64", field.totalGasFees),
      totalStakeRewardsDistributed: decodeFromJSONField(
        "u64",
        field.totalStakeRewardsDistributed,
      ),
      leftoverStorageFundInflow: decodeFromJSONField(
        "u64",
        field.leftoverStorageFundInflow,
      ),
    });
  }

  static fromJSON(json: Record<string, any>): SystemEpochInfoEvent {
    if (json.$typeName !== SystemEpochInfoEvent.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return SystemEpochInfoEvent.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): SystemEpochInfoEvent {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isSystemEpochInfoEvent(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a SystemEpochInfoEvent object`,
      );
    }
    return SystemEpochInfoEvent.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): SystemEpochInfoEvent {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isSystemEpochInfoEvent(data.bcs.type)
      ) {
        throw new Error(`object at is not a SystemEpochInfoEvent object`);
      }

      return SystemEpochInfoEvent.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return SystemEpochInfoEvent.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(
    client: SuiClient,
    id: string,
  ): Promise<SystemEpochInfoEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching SystemEpochInfoEvent object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isSystemEpochInfoEvent(res.data.bcs.type)
    ) {
      throw new Error(
        `object at id ${id} is not a SystemEpochInfoEvent object`,
      );
    }

    return SystemEpochInfoEvent.fromSuiObjectData(res.data);
  }
}
